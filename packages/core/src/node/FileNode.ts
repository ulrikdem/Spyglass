import { AstNode } from '..'
import { LanguageError } from '../type'

export interface FileNode<CN extends AstNode> extends AstNode {
	type: 'file',
	children: CN[],
	parserErrors: readonly LanguageError[],
	binderErrors: readonly LanguageError[],
	checkerErrors: readonly LanguageError[],
}