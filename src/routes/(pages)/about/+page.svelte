<script lang="ts">
  import { Meta } from "$lib/components";
  const skills = {
    Frontend: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Svelte",
      "HTML",
      "CSS",
      "WebGL",
      "WebAssembly",
    ],
    Backend: [
      "Go",
      "Node.js",
      "PHP",
      "Ruby",
      "Rust",
      "C#",
      "C++",
      "Ruby on Rails",
      "SQL",
      "Linux",
    ],
    Other: [
      "AWS (EC2, ECS, ECR, S3, Cognito)",
      "GoogleCloud (FireStore, Firebase Authentication, Cloud Functions, GAS)",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "RESTful",
      "GraphQL",
      "Jest",
      "Cypress",
      "OpenGL",
      "Figma",
      "Illustrator",
      "Photoshop",
    ],
  };
</script>

<Meta
  title="About | Kanaru"
  description="佐々木哉瑠(かなる)のポートフォリオサイト"
/>

<h1>about</h1>
<div class="space-y-12">
  <section class="grid grid-cols-2 gap-4 md:gap-8">
    <img src="/profile.png" alt="profile" class="ml-auto w-full max-w-48" />
    <div>
      <h2>Sasaki Kanaru</h2>
      <p class="text-xs">佐々木 哉瑠</p>
      <div class="mt-3">
        <p>2000年生まれ。</p>
        <p>仙台で活動するwebエンジニアです。</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Skills</h2>
    <div class="my-3 leading-7">
      {#each Object.entries(skills) as [title, eachSkills]}
        <h3 class="mb-1 mt-4">{title}</h3>
        {#each eachSkills as skill}
          <span class="mr-2 inline-block">{skill}</span>
        {/each}
      {/each}
    </div>
    <p>
      Next.js, TypeScriptでフロントエンドポジションをメインに活動しています。
    </p>
  </section>
</div>
