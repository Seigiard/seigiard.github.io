declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"tumblr": {
"101734586591.md": {
	id: "101734586591.md";
  slug: "101734586591";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"102008542791.md": {
	id: "102008542791.md";
  slug: "102008542791";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"108547691571.md": {
	id: "108547691571.md";
  slug: "108547691571";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"111169441746.md": {
	id: "111169441746.md";
  slug: "111169441746";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"111217694176.md": {
	id: "111217694176.md";
  slug: "111217694176";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"114038633336.md": {
	id: "114038633336.md";
  slug: "114038633336";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"114661566256.md": {
	id: "114661566256.md";
  slug: "114661566256";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"115098796431.md": {
	id: "115098796431.md";
  slug: "115098796431";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"118841932246.md": {
	id: "118841932246.md";
  slug: "118841932246";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"119508537151.md": {
	id: "119508537151.md";
  slug: "119508537151";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"121090956601.md": {
	id: "121090956601.md";
  slug: "121090956601";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"125333222466.md": {
	id: "125333222466.md";
  slug: "125333222466";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"126493719381.md": {
	id: "126493719381.md";
  slug: "126493719381";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"128766697746.md": {
	id: "128766697746.md";
  slug: "128766697746";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"130618467421.md": {
	id: "130618467421.md";
  slug: "130618467421";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"130816439376.md": {
	id: "130816439376.md";
  slug: "130816439376";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"133918333471.md": {
	id: "133918333471.md";
  slug: "133918333471";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"135831271116.md": {
	id: "135831271116.md";
  slug: "135831271116";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"136548714046.md": {
	id: "136548714046.md";
  slug: "136548714046";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"143778814011.md": {
	id: "143778814011.md";
  slug: "143778814011";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"145625928236.md": {
	id: "145625928236.md";
  slug: "145625928236";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"157647398281.md": {
	id: "157647398281.md";
  slug: "157647398281";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"157740063066.md": {
	id: "157740063066.md";
  slug: "157740063066";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"158468894231.md": {
	id: "158468894231.md";
  slug: "158468894231";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"161730523401.md": {
	id: "161730523401.md";
  slug: "161730523401";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"80249359967.md": {
	id: "80249359967.md";
  slug: "80249359967";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"80476281027.md": {
	id: "80476281027.md";
  slug: "80476281027";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"81312596708.md": {
	id: "81312596708.md";
  slug: "81312596708";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"81570032536.md": {
	id: "81570032536.md";
  slug: "81570032536";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"81649763989.md": {
	id: "81649763989.md";
  slug: "81649763989";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"82772439279.md": {
	id: "82772439279.md";
  slug: "82772439279";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"83439444715.md": {
	id: "83439444715.md";
  slug: "83439444715";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"83500793175.md": {
	id: "83500793175.md";
  slug: "83500793175";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841621351.md": {
	id: "84841621351.md";
  slug: "84841621351";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841986761.md": {
	id: "84841986761.md";
  slug: "84841986761";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841987681.md": {
	id: "84841987681.md";
  slug: "84841987681";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841988131.md": {
	id: "84841988131.md";
  slug: "84841988131";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841989156.md": {
	id: "84841989156.md";
  slug: "84841989156";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841990416.md": {
	id: "84841990416.md";
  slug: "84841990416";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841990961.md": {
	id: "84841990961.md";
  slug: "84841990961";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841991466.md": {
	id: "84841991466.md";
  slug: "84841991466";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841992026.md": {
	id: "84841992026.md";
  slug: "84841992026";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84841992826.md": {
	id: "84841992826.md";
  slug: "84841992826";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842281066.md": {
	id: "84842281066.md";
  slug: "84842281066";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842282776.md": {
	id: "84842282776.md";
  slug: "84842282776";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842284101.md": {
	id: "84842284101.md";
  slug: "84842284101";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842284626.md": {
	id: "84842284626.md";
  slug: "84842284626";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842285221.md": {
	id: "84842285221.md";
  slug: "84842285221";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842286276.md": {
	id: "84842286276.md";
  slug: "84842286276";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842286861.md": {
	id: "84842286861.md";
  slug: "84842286861";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842287386.md": {
	id: "84842287386.md";
  slug: "84842287386";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842287906.md": {
	id: "84842287906.md";
  slug: "84842287906";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842288446.md": {
	id: "84842288446.md";
  slug: "84842288446";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842289051.md": {
	id: "84842289051.md";
  slug: "84842289051";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842289531.md": {
	id: "84842289531.md";
  slug: "84842289531";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842290006.md": {
	id: "84842290006.md";
  slug: "84842290006";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842290586.md": {
	id: "84842290586.md";
  slug: "84842290586";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842291161.md": {
	id: "84842291161.md";
  slug: "84842291161";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842292561.md": {
	id: "84842292561.md";
  slug: "84842292561";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842293521.md": {
	id: "84842293521.md";
  slug: "84842293521";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842294701.md": {
	id: "84842294701.md";
  slug: "84842294701";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842295536.md": {
	id: "84842295536.md";
  slug: "84842295536";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842296021.md": {
	id: "84842296021.md";
  slug: "84842296021";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842296961.md": {
	id: "84842296961.md";
  slug: "84842296961";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842297596.md": {
	id: "84842297596.md";
  slug: "84842297596";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842298481.md": {
	id: "84842298481.md";
  slug: "84842298481";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842299021.md": {
	id: "84842299021.md";
  slug: "84842299021";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842299876.md": {
	id: "84842299876.md";
  slug: "84842299876";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842300451.md": {
	id: "84842300451.md";
  slug: "84842300451";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842300901.md": {
	id: "84842300901.md";
  slug: "84842300901";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842302306.md": {
	id: "84842302306.md";
  slug: "84842302306";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842302851.md": {
	id: "84842302851.md";
  slug: "84842302851";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842303736.md": {
	id: "84842303736.md";
  slug: "84842303736";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842304246.md": {
	id: "84842304246.md";
  slug: "84842304246";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842304761.md": {
	id: "84842304761.md";
  slug: "84842304761";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842305391.md": {
	id: "84842305391.md";
  slug: "84842305391";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842305906.md": {
	id: "84842305906.md";
  slug: "84842305906";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842306486.md": {
	id: "84842306486.md";
  slug: "84842306486";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842307091.md": {
	id: "84842307091.md";
  slug: "84842307091";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842307581.md": {
	id: "84842307581.md";
  slug: "84842307581";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842308531.md": {
	id: "84842308531.md";
  slug: "84842308531";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842309326.md": {
	id: "84842309326.md";
  slug: "84842309326";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842309886.md": {
	id: "84842309886.md";
  slug: "84842309886";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842340051.md": {
	id: "84842340051.md";
  slug: "84842340051";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842341086.md": {
	id: "84842341086.md";
  slug: "84842341086";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842341586.md": {
	id: "84842341586.md";
  slug: "84842341586";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842342076.md": {
	id: "84842342076.md";
  slug: "84842342076";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842342636.md": {
	id: "84842342636.md";
  slug: "84842342636";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842343601.md": {
	id: "84842343601.md";
  slug: "84842343601";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842344616.md": {
	id: "84842344616.md";
  slug: "84842344616";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842345346.md": {
	id: "84842345346.md";
  slug: "84842345346";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842345891.md": {
	id: "84842345891.md";
  slug: "84842345891";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842346486.md": {
	id: "84842346486.md";
  slug: "84842346486";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842347211.md": {
	id: "84842347211.md";
  slug: "84842347211";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842347726.md": {
	id: "84842347726.md";
  slug: "84842347726";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842348126.md": {
	id: "84842348126.md";
  slug: "84842348126";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842348696.md": {
	id: "84842348696.md";
  slug: "84842348696";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842349571.md": {
	id: "84842349571.md";
  slug: "84842349571";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842350606.md": {
	id: "84842350606.md";
  slug: "84842350606";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842351556.md": {
	id: "84842351556.md";
  slug: "84842351556";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842352056.md": {
	id: "84842352056.md";
  slug: "84842352056";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842352606.md": {
	id: "84842352606.md";
  slug: "84842352606";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842353126.md": {
	id: "84842353126.md";
  slug: "84842353126";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842353631.md": {
	id: "84842353631.md";
  slug: "84842353631";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842354096.md": {
	id: "84842354096.md";
  slug: "84842354096";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842354681.md": {
	id: "84842354681.md";
  slug: "84842354681";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842355191.md": {
	id: "84842355191.md";
  slug: "84842355191";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842355636.md": {
	id: "84842355636.md";
  slug: "84842355636";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842356331.md": {
	id: "84842356331.md";
  slug: "84842356331";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842357306.md": {
	id: "84842357306.md";
  slug: "84842357306";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842357836.md": {
	id: "84842357836.md";
  slug: "84842357836";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842358301.md": {
	id: "84842358301.md";
  slug: "84842358301";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842358826.md": {
	id: "84842358826.md";
  slug: "84842358826";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842359786.md": {
	id: "84842359786.md";
  slug: "84842359786";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842360386.md": {
	id: "84842360386.md";
  slug: "84842360386";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842361401.md": {
	id: "84842361401.md";
  slug: "84842361401";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842362326.md": {
	id: "84842362326.md";
  slug: "84842362326";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842363236.md": {
	id: "84842363236.md";
  slug: "84842363236";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842363756.md": {
	id: "84842363756.md";
  slug: "84842363756";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842364311.md": {
	id: "84842364311.md";
  slug: "84842364311";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842364861.md": {
	id: "84842364861.md";
  slug: "84842364861";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842365441.md": {
	id: "84842365441.md";
  slug: "84842365441";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842365941.md": {
	id: "84842365941.md";
  slug: "84842365941";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842366546.md": {
	id: "84842366546.md";
  slug: "84842366546";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842367016.md": {
	id: "84842367016.md";
  slug: "84842367016";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842367551.md": {
	id: "84842367551.md";
  slug: "84842367551";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842368141.md": {
	id: "84842368141.md";
  slug: "84842368141";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842368766.md": {
	id: "84842368766.md";
  slug: "84842368766";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842369331.md": {
	id: "84842369331.md";
  slug: "84842369331";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842369831.md": {
	id: "84842369831.md";
  slug: "84842369831";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842370341.md": {
	id: "84842370341.md";
  slug: "84842370341";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842370991.md": {
	id: "84842370991.md";
  slug: "84842370991";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842371526.md": {
	id: "84842371526.md";
  slug: "84842371526";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842492541.md": {
	id: "84842492541.md";
  slug: "84842492541";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842493701.md": {
	id: "84842493701.md";
  slug: "84842493701";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842494761.md": {
	id: "84842494761.md";
  slug: "84842494761";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842495661.md": {
	id: "84842495661.md";
  slug: "84842495661";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842496686.md": {
	id: "84842496686.md";
  slug: "84842496686";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842497216.md": {
	id: "84842497216.md";
  slug: "84842497216";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842497701.md": {
	id: "84842497701.md";
  slug: "84842497701";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842498621.md": {
	id: "84842498621.md";
  slug: "84842498621";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842499191.md": {
	id: "84842499191.md";
  slug: "84842499191";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842499636.md": {
	id: "84842499636.md";
  slug: "84842499636";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842500131.md": {
	id: "84842500131.md";
  slug: "84842500131";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842500831.md": {
	id: "84842500831.md";
  slug: "84842500831";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842501681.md": {
	id: "84842501681.md";
  slug: "84842501681";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842502336.md": {
	id: "84842502336.md";
  slug: "84842502336";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842503506.md": {
	id: "84842503506.md";
  slug: "84842503506";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842504461.md": {
	id: "84842504461.md";
  slug: "84842504461";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842505356.md": {
	id: "84842505356.md";
  slug: "84842505356";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842506051.md": {
	id: "84842506051.md";
  slug: "84842506051";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842506661.md": {
	id: "84842506661.md";
  slug: "84842506661";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842507826.md": {
	id: "84842507826.md";
  slug: "84842507826";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842508371.md": {
	id: "84842508371.md";
  slug: "84842508371";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842508921.md": {
	id: "84842508921.md";
  slug: "84842508921";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842509776.md": {
	id: "84842509776.md";
  slug: "84842509776";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842510326.md": {
	id: "84842510326.md";
  slug: "84842510326";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842510796.md": {
	id: "84842510796.md";
  slug: "84842510796";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842511311.md": {
	id: "84842511311.md";
  slug: "84842511311";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842511896.md": {
	id: "84842511896.md";
  slug: "84842511896";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842512676.md": {
	id: "84842512676.md";
  slug: "84842512676";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842513291.md": {
	id: "84842513291.md";
  slug: "84842513291";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842513796.md": {
	id: "84842513796.md";
  slug: "84842513796";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842514691.md": {
	id: "84842514691.md";
  slug: "84842514691";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842515501.md": {
	id: "84842515501.md";
  slug: "84842515501";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842516511.md": {
	id: "84842516511.md";
  slug: "84842516511";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842517411.md": {
	id: "84842517411.md";
  slug: "84842517411";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842517791.md": {
	id: "84842517791.md";
  slug: "84842517791";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842518361.md": {
	id: "84842518361.md";
  slug: "84842518361";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842518936.md": {
	id: "84842518936.md";
  slug: "84842518936";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842519396.md": {
	id: "84842519396.md";
  slug: "84842519396";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842520251.md": {
	id: "84842520251.md";
  slug: "84842520251";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842521146.md": {
	id: "84842521146.md";
  slug: "84842521146";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842521606.md": {
	id: "84842521606.md";
  slug: "84842521606";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842522156.md": {
	id: "84842522156.md";
  slug: "84842522156";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842522746.md": {
	id: "84842522746.md";
  slug: "84842522746";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842523231.md": {
	id: "84842523231.md";
  slug: "84842523231";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842523751.md": {
	id: "84842523751.md";
  slug: "84842523751";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842524281.md": {
	id: "84842524281.md";
  slug: "84842524281";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842524716.md": {
	id: "84842524716.md";
  slug: "84842524716";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842525261.md": {
	id: "84842525261.md";
  slug: "84842525261";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842526311.md": {
	id: "84842526311.md";
  slug: "84842526311";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842526991.md": {
	id: "84842526991.md";
  slug: "84842526991";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842593131.md": {
	id: "84842593131.md";
  slug: "84842593131";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842594471.md": {
	id: "84842594471.md";
  slug: "84842594471";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842595281.md": {
	id: "84842595281.md";
  slug: "84842595281";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842596356.md": {
	id: "84842596356.md";
  slug: "84842596356";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842598266.md": {
	id: "84842598266.md";
  slug: "84842598266";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842598911.md": {
	id: "84842598911.md";
  slug: "84842598911";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842600171.md": {
	id: "84842600171.md";
  slug: "84842600171";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842600941.md": {
	id: "84842600941.md";
  slug: "84842600941";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842601851.md": {
	id: "84842601851.md";
  slug: "84842601851";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842602421.md": {
	id: "84842602421.md";
  slug: "84842602421";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842602871.md": {
	id: "84842602871.md";
  slug: "84842602871";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842603306.md": {
	id: "84842603306.md";
  slug: "84842603306";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842604376.md": {
	id: "84842604376.md";
  slug: "84842604376";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842604921.md": {
	id: "84842604921.md";
  slug: "84842604921";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842605461.md": {
	id: "84842605461.md";
  slug: "84842605461";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842606061.md": {
	id: "84842606061.md";
  slug: "84842606061";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842606561.md": {
	id: "84842606561.md";
  slug: "84842606561";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842607191.md": {
	id: "84842607191.md";
  slug: "84842607191";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842607806.md": {
	id: "84842607806.md";
  slug: "84842607806";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842609096.md": {
	id: "84842609096.md";
  slug: "84842609096";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842609581.md": {
	id: "84842609581.md";
  slug: "84842609581";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842610401.md": {
	id: "84842610401.md";
  slug: "84842610401";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842611436.md": {
	id: "84842611436.md";
  slug: "84842611436";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842611981.md": {
	id: "84842611981.md";
  slug: "84842611981";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842612526.md": {
	id: "84842612526.md";
  slug: "84842612526";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842613031.md": {
	id: "84842613031.md";
  slug: "84842613031";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842613516.md": {
	id: "84842613516.md";
  slug: "84842613516";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842614071.md": {
	id: "84842614071.md";
  slug: "84842614071";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842614556.md": {
	id: "84842614556.md";
  slug: "84842614556";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842615371.md": {
	id: "84842615371.md";
  slug: "84842615371";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842615921.md": {
	id: "84842615921.md";
  slug: "84842615921";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842616471.md": {
	id: "84842616471.md";
  slug: "84842616471";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842616961.md": {
	id: "84842616961.md";
  slug: "84842616961";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842617526.md": {
	id: "84842617526.md";
  slug: "84842617526";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842618096.md": {
	id: "84842618096.md";
  slug: "84842618096";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842619341.md": {
	id: "84842619341.md";
  slug: "84842619341";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842619876.md": {
	id: "84842619876.md";
  slug: "84842619876";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842621396.md": {
	id: "84842621396.md";
  slug: "84842621396";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842622231.md": {
	id: "84842622231.md";
  slug: "84842622231";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842622831.md": {
	id: "84842622831.md";
  slug: "84842622831";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842623806.md": {
	id: "84842623806.md";
  slug: "84842623806";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842624391.md": {
	id: "84842624391.md";
  slug: "84842624391";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842624966.md": {
	id: "84842624966.md";
  slug: "84842624966";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842625626.md": {
	id: "84842625626.md";
  slug: "84842625626";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842626261.md": {
	id: "84842626261.md";
  slug: "84842626261";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842626891.md": {
	id: "84842626891.md";
  slug: "84842626891";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842627616.md": {
	id: "84842627616.md";
  slug: "84842627616";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842628136.md": {
	id: "84842628136.md";
  slug: "84842628136";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842628731.md": {
	id: "84842628731.md";
  slug: "84842628731";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842629341.md": {
	id: "84842629341.md";
  slug: "84842629341";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842674016.md": {
	id: "84842674016.md";
  slug: "84842674016";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842674946.md": {
	id: "84842674946.md";
  slug: "84842674946";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842675851.md": {
	id: "84842675851.md";
  slug: "84842675851";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842676531.md": {
	id: "84842676531.md";
  slug: "84842676531";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842677051.md": {
	id: "84842677051.md";
  slug: "84842677051";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842677671.md": {
	id: "84842677671.md";
  slug: "84842677671";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842678176.md": {
	id: "84842678176.md";
  slug: "84842678176";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842679156.md": {
	id: "84842679156.md";
  slug: "84842679156";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842679731.md": {
	id: "84842679731.md";
  slug: "84842679731";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842680251.md": {
	id: "84842680251.md";
  slug: "84842680251";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842680926.md": {
	id: "84842680926.md";
  slug: "84842680926";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842681561.md": {
	id: "84842681561.md";
  slug: "84842681561";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842682066.md": {
	id: "84842682066.md";
  slug: "84842682066";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842682536.md": {
	id: "84842682536.md";
  slug: "84842682536";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842683146.md": {
	id: "84842683146.md";
  slug: "84842683146";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842683721.md": {
	id: "84842683721.md";
  slug: "84842683721";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842684951.md": {
	id: "84842684951.md";
  slug: "84842684951";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842732321.md": {
	id: "84842732321.md";
  slug: "84842732321";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842733151.md": {
	id: "84842733151.md";
  slug: "84842733151";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842733946.md": {
	id: "84842733946.md";
  slug: "84842733946";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842734711.md": {
	id: "84842734711.md";
  slug: "84842734711";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842736441.md": {
	id: "84842736441.md";
  slug: "84842736441";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842737181.md": {
	id: "84842737181.md";
  slug: "84842737181";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842738341.md": {
	id: "84842738341.md";
  slug: "84842738341";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842738991.md": {
	id: "84842738991.md";
  slug: "84842738991";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842739876.md": {
	id: "84842739876.md";
  slug: "84842739876";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842740526.md": {
	id: "84842740526.md";
  slug: "84842740526";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842741221.md": {
	id: "84842741221.md";
  slug: "84842741221";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842742086.md": {
	id: "84842742086.md";
  slug: "84842742086";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842742946.md": {
	id: "84842742946.md";
  slug: "84842742946";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842743626.md": {
	id: "84842743626.md";
  slug: "84842743626";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842744356.md": {
	id: "84842744356.md";
  slug: "84842744356";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842745326.md": {
	id: "84842745326.md";
  slug: "84842745326";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842746436.md": {
	id: "84842746436.md";
  slug: "84842746436";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842747681.md": {
	id: "84842747681.md";
  slug: "84842747681";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842748396.md": {
	id: "84842748396.md";
  slug: "84842748396";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842749671.md": {
	id: "84842749671.md";
  slug: "84842749671";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"84842751036.md": {
	id: "84842751036.md";
  slug: "84842751036";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"85305996101.md": {
	id: "85305996101.md";
  slug: "85305996101";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"87180568371.md": {
	id: "87180568371.md";
  slug: "87180568371";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"87279708156.md": {
	id: "87279708156.md";
  slug: "87279708156";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"89053931456.md": {
	id: "89053931456.md";
  slug: "89053931456";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"91079456346.md": {
	id: "91079456346.md";
  slug: "91079456346";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"93388253041.md": {
	id: "93388253041.md";
  slug: "93388253041";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"93493297451.md": {
	id: "93493297451.md";
  slug: "93493297451";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96263075096.md": {
	id: "96263075096.md";
  slug: "96263075096";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96687125396.md": {
	id: "96687125396.md";
  slug: "96687125396";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96817290776.md": {
	id: "96817290776.md";
  slug: "96817290776";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96817434896.md": {
	id: "96817434896.md";
  slug: "96817434896";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96817522711.md": {
	id: "96817522711.md";
  slug: "96817522711";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96817996226.md": {
	id: "96817996226.md";
  slug: "96817996226";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818009141.md": {
	id: "96818009141.md";
  slug: "96818009141";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818134391.md": {
	id: "96818134391.md";
  slug: "96818134391";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818275596.md": {
	id: "96818275596.md";
  slug: "96818275596";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818293761.md": {
	id: "96818293761.md";
  slug: "96818293761";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818295481.md": {
	id: "96818295481.md";
  slug: "96818295481";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818297616.md": {
	id: "96818297616.md";
  slug: "96818297616";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818381386.md": {
	id: "96818381386.md";
  slug: "96818381386";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818386066.md": {
	id: "96818386066.md";
  slug: "96818386066";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818387221.md": {
	id: "96818387221.md";
  slug: "96818387221";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818428991.md": {
	id: "96818428991.md";
  slug: "96818428991";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818430686.md": {
	id: "96818430686.md";
  slug: "96818430686";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818431711.md": {
	id: "96818431711.md";
  slug: "96818431711";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818432911.md": {
	id: "96818432911.md";
  slug: "96818432911";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818691976.md": {
	id: "96818691976.md";
  slug: "96818691976";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96818928201.md": {
	id: "96818928201.md";
  slug: "96818928201";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96819157696.md": {
	id: "96819157696.md";
  slug: "96819157696";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96819249101.md": {
	id: "96819249101.md";
  slug: "96819249101";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96819305166.md": {
	id: "96819305166.md";
  slug: "96819305166";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"96819382041.md": {
	id: "96819382041.md";
  slug: "96819382041";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"98398961431.md": {
	id: "98398961431.md";
  slug: "98398961431";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"98406524431.md": {
	id: "98406524431.md";
  slug: "98406524431";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
"98659673976.md": {
	id: "98659673976.md";
  slug: "98659673976";
  body: string;
  collection: "tumblr";
  data: InferEntrySchema<"tumblr">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
