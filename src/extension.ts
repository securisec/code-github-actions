import * as vscode from 'vscode';

import {
	getYamlApi,
	getSchemaContent,
	onRequestSchemaURI,
	G_ACTIONS_YAML_SCHEMA
} from './yaml-complete/schema';

export async function activate(context: vscode.ExtensionContext) {
	const yamlApi = await getYamlApi();
	if (yamlApi) {
		const resolveSchemaContent = await getSchemaContent();
		yamlApi.registerContributor(
			G_ACTIONS_YAML_SCHEMA,
			onRequestSchemaURI,
			() => resolveSchemaContent
		);
	}
}
