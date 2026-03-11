import type { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { plugin as typescriptPlugin } from '@graphql-codegen/typescript';
import type { DocumentNode } from 'graphql';
import { collectReachableTypes } from './collectReachableTypes';
import { buildFilteredSchema } from './buildFilteredSchema';

export const plugin: PluginFunction = (schema, documents, config) => {
  const docs = documents.map((d) => d.document).filter((d): d is DocumentNode => d != null);
  const reachable = collectReachableTypes(schema, docs);
  const filteredSchema = buildFilteredSchema(schema, reachable);
  return typescriptPlugin(filteredSchema, documents, config);
};
