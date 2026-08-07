import { MDXRemote } from "next-mdx-remote/rsc";
import type { Author } from "@/entities/authors/authors";
import {
  AuthorCard,
  type AuthorCardData,
} from "@/ui-kit/components/organisms/AuthorCard/AuthorCard";
import { rehypePlugins, remarkPlugins } from "@/usecases/mdx";

interface Props {
  author: Author;
  headingLevel?: "h1" | "h2" | "h3";
}

export const AuthorCardContent = ({ author, headingLevel }: Props) => {
  const mappedAuthor: AuthorCardData = {
    name: author.name,
    slug: author.slug,
    avatar: author.avatar,
    pronouns: author.pronouns,
    website: author.website,
    bluesky: author.bluesky,
    mastodon: author.mastodon,
    github: author.github,
    linkedin: author.linkedin,
    medium: author.medium,
    devto: author.devto,
    codepen: author.codepen,
    bio: (
      <MDXRemote
        source={author.content}
        options={{
          mdxOptions: {
            remarkPlugins,
            rehypePlugins,
          },
        }}
      />
    ),
  };

  return <AuthorCard author={mappedAuthor} headingLevel={headingLevel} />;
};
