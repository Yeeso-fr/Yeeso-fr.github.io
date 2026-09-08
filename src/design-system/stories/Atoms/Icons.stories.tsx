import {
  faBluesky,
  faGithub,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faStar,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faCircleInfo,
  faHouse,
  faMagnifyingGlass,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";
import "../stories.css";

const meta = {
  title: "Atoms/Icons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const SolidIcons: StoryObj = {
  render: () => (
    <div className="article-content story-icon-row">
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faCheck} />
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <FontAwesomeIcon icon={faCircleInfo} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  ),
};

export const RegularIcons: StoryObj = {
  render: () => (
    <div className="article-content story-icon-row">
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  ),
};

export const BrandIcons: StoryObj = {
  render: () => (
    <div className="article-content story-icon-row">
      <FontAwesomeIcon icon={faBluesky} />
      <FontAwesomeIcon icon={faMastodon} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
    </div>
  ),
};

export const IconSizes: StoryObj = {
  render: () => (
    <div className="article-content story-icon-row--baseline">
      <FontAwesomeIcon icon={faHouse} size="xs" />
      <FontAwesomeIcon icon={faHouse} size="sm" />
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faHouse} size="lg" />
      <FontAwesomeIcon icon={faHouse} size="2x" />
      <FontAwesomeIcon icon={faHouse} size="3x" />
    </div>
  ),
};
