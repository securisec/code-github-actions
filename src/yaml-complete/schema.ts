import * as vscode from 'vscode';

export const G_ACTIONS_YAML_SCHEMA = 'gaschema';

export const getYamlApi = async () => {
	const ext = vscode.extensions.getExtension('redhat.vscode-yaml');

	if (!ext) {
		vscode.window.showWarningMessage(
			"You must have 'YAML Support by Red Hat' installed in order to use this extension."
		);
		return undefined;
	}

	const yamlPlugin = await ext.activate();
	if (!yamlPlugin || !yamlPlugin.registerContributor) {
		vscode.window.showWarningMessage(
			"Please upgrade 'YAML Support by Red Hat' via the Extensions pane."
		);
		return undefined;
	}
	return yamlPlugin;
};

export function onRequestSchemaURI(resource: string): string | undefined {
	if (new RegExp(/\.github\/workflows\/.*\.ya?ml/).test(resource)) {
		return `${G_ACTIONS_YAML_SCHEMA}://schema/githubactions`;
	}
	return undefined;
}

let responseCache = '';
export async function getSchemaContent() {
	// if (responseCache !== '') {
	// 	return responseCache;
	// }
	const response = JSON.stringify(require('../../schemas/actions.json'));
	return response;
	// return responseCache;
}
