import * as vscode from 'vscode';

export enum AnnotatorType {

}

export interface IAnnotator {
    ranges: vscode.Range[];
    type: AnnotatorType;
}