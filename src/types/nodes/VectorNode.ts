import { LintConfig } from '../Config'
import { GetFormattedString } from '../Formattable'
import VectorArgumentParser from '../../parsers/VectorArgumentParser'
import ArgumentNode, { NodeType, GetCodeActions, NodeRange, DiagnosticMap } from './ArgumentNode'
import NumberNode from './NumberNode'
import FunctionInfo from '../FunctionInfo'
import TextRange, { areOverlapped } from '../TextRange'
import { Diagnostic, CodeAction } from 'vscode-languageserver'

export const enum VectorElementType {
    Absolute = '',
    Relative = '~',
    Local = '^'
}

export class VectorElementNode extends NumberNode {
    constructor(public type: VectorElementType, value: number, raw: string) {
        super(value, raw)
    }

    /**
     * Return the raw representation of this vector, including prefix.
     */
    toString() {
        return this.type + this.raw
    }
}

export default class VectorNode extends ArgumentNode implements ArrayLike<VectorElementNode> {
    [index: number]: VectorElementNode

    readonly [NodeType] = 'Vector'

    length = 0

    constructor() {
        super()
    }

    push(...values: VectorElementNode[]) {
        for (const value of values) {
            this[this.length++] = value
        }
    }

    *[Symbol.iterator](): Iterator<VectorElementNode, any, undefined> {
        // You want me to call myself for iterating? Stupid!
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < this.length; i++) {
            yield this[i]
        }
    }

    [GetCodeActions](uri: string, info: FunctionInfo, lineNumber: number, range: TextRange, diagnostics: DiagnosticMap) {
        const ans: CodeAction[] = []
        for (const element of this) {
            if (areOverlapped(element[NodeRange], range)) {
                ans.push(...element[GetCodeActions](uri, info, lineNumber, range, diagnostics))
            }
        }
        return ans
    }

    [GetFormattedString](lint: LintConfig) {
        return Array.prototype.map.call(this, (v: VectorElementNode) => v[GetFormattedString](lint)).join(' ')
    }
}