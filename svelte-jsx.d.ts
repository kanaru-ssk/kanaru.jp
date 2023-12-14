/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace svelteHTML {
  type HTMLProps<Property extends string, Override> = Omit<
    Omit<
      import("svelte/elements").SvelteHTMLElements[Property],
      keyof EventsWithColon<
        Omit<
          svelte.JSX.IntrinsicElements[Property & string],
          svelte.JSX.AttributeNames
        >
      >
    > &
      EventsWithColon<
        Omit<
          svelte.JSX.IntrinsicElements[Property & string],
          svelte.JSX.AttributeNames
        >
      >,
    keyof Override
  > &
    Override &
    (
      | Record<
          "on:*",
          (
            event: Event & { currentTarget: EventTarget & EventTarget },
          ) => any | never
        >
      | object
    );
}
