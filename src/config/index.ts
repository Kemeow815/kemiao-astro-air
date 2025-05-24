import { Github, Twitter, Plane, Mail } from "lucide-react"

export const defaultLanguage: string = "zh"

export const common = {
  domain: "https://kmblog.kemiao.site",
  meta: {
    favicon: "/kemiao.jpg",
    url: "https://kmblog.kemiao.site",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/kemiaosw",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Kemeow815",
    },
    {
      icon: Plane,
      label: "Telegram",
      link: "https://t.me/KemiaoJun",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:me@kemiaosw.top",
    }
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [
      {
        label: "Music",
        link: "https://music.kemiao.online",
      },
    ],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "喵落阁",
  meta: {
    ...common.meta,
    title: "克喵爱吃卤面",
    slogan: "一个普通人。",
    description: "愿你看清一切真相后，依旧热爱你的家人和朋友。",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "音乐",
        link: "https://music.kemiao.online",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "克喵的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友们",
      description: "克喵和他朋友们",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于我",
      description: "克喵的自我介绍",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "MiaoLuoGe",
  meta: {
    ...common.meta,
    title: "KeMiao",
    slogan: "a commom person.",
    description:
      "I wish you still love your family and friends after seeing through all the truth.",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "Music",
        link: "https://music.kemiao.online",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are KeMiao's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are KeMiao's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is KeMiao's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
