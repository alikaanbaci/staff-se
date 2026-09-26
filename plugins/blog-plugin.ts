import type {LoadContext, Plugin} from '@docusaurus/types';
import blogPlugin, {validateOptions} from '@docusaurus/plugin-content-blog';
import type {
  BlogContent,
  PluginOptions,
} from '@docusaurus/plugin-content-blog';

import type {BlogPostSummary} from '../src/data/blog';

// Varsayılan blog plugin'ini sarar: route'ları aynen üretir, ek olarak tüm
// yazıların özetini global data olarak yayınlar. Ana sayfadaki "Son yazılar"
// ve blog listesindeki filtre/arama bu veriyi kullanır (useBlogPosts).
export default async function blogPluginWithPosts(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<BlogContent>> {
  const plugin = await blogPlugin(context, options);
  return {
    ...plugin,
    async contentLoaded(args) {
      await plugin.contentLoaded?.(args);
      const posts: BlogPostSummary[] = args.content.blogPosts
        .filter(({metadata}) => !metadata.unlisted)
        .map(({metadata}) => ({
          title: metadata.title,
          description: metadata.description,
          permalink: metadata.permalink,
          date: new Date(metadata.date).toISOString(),
          readingTime: metadata.readingTime,
          tags: metadata.tags.map(({label, permalink}) => ({label, permalink})),
        }));
      args.actions.setGlobalData({posts});
    },
  };
}

export {validateOptions};
