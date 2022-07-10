import Link from "next/link";

const Logo = () => {
  return (
    <div className="py-16">
      <Link href="/">
        <a title="トップページへ">
          <svg className="m-auto" width="96" height="48">
            <path
              d="M0 23.852h9.735v1.018c-2.84.246-3.284.509-3.284 3.743v6.27a5.285 5.285 0 0 0 2.627-1.641c2.036-1.937 4.482-4.4 6.156-6.304 1.1-1.231.985-1.641-.575-1.92l-1.034-.115v-1.018h8.865v1.018a7.813 7.813 0 0 0-6.189 3.004c-1.1 1.05-3.94 3.825-6.27 6.123 2.773 3.283 6.812 7.929 8.716 9.931 1.904 2.003 2.331 2.299 4.596 2.561v1.084H17.5c-2.725-3.283-5.762-6.78-9.078-10.654a2.2 2.2 0 0 0-2.035-1.05v6.91c0 3.185.328 3.431 3.283 3.694v1.1H0v-1.018c2.988-.263 3.283-.509 3.283-3.694V28.614c0-3.284-.262-3.53-3.283-3.743v-1.018ZM34.178 48a2.281 2.281 0 0 1-1.461-.591c-.38-.39-.642-.88-.755-1.412A9.947 9.947 0 0 1 28.202 48a3.841 3.841 0 0 1-3.825-3.841 3.185 3.185 0 0 1 2.578-3.12 24.035 24.035 0 0 0 4.925-2.035v-.624c0-2.216-1.133-3.496-2.758-3.496a1.806 1.806 0 0 0-.821.18 2.068 2.068 0 0 0-.657.542 6.894 6.894 0 0 0-.837 2.02.87.87 0 0 1-.903.721 1.494 1.494 0 0 1-1.379-1.362c0-.443.394-.82 1.035-1.264a13.132 13.132 0 0 1 4.497-2.183 4.087 4.087 0 0 1 4.236 4.465v6.04c0 1.445.525 1.872 1.1 1.872.395-.016.78-.135 1.116-.345l.312.887L34.178 48Zm-2.282-7.913c-.69.345-2.2 1.002-2.906 1.314-1.198.525-1.92 1.132-1.92 2.281a2.283 2.283 0 0 0 2.265 2.414 4.186 4.186 0 0 0 2.561-1.133v-4.876ZM46.884 47.606v-.87c1.806-.18 2.002-.41 2.002-2.528v-5.22c0-2.2-.788-3.66-2.856-3.66a5.466 5.466 0 0 0-3.48 1.64v7.355c0 2.167.197 2.233 2.036 2.413v.87h-6.83v-.87c2.069-.213 2.266-.345 2.266-2.413v-6.566c0-2.036-.23-2.134-1.92-2.413v-.805a18.354 18.354 0 0 0 4.382-1.248v2.463l2.134-1.445a4.826 4.826 0 0 1 2.594-.935c2.512 0 4.071 1.855 4.071 4.924v6.025c0 2.134.197 2.233 2.02 2.413v.87h-6.42ZM64.514 48a2.282 2.282 0 0 1-1.477-.591c-.35-.41-.578-.91-.657-1.445a10.063 10.063 0 0 1-3.759 2.003 3.841 3.841 0 0 1-3.825-3.841 3.168 3.168 0 0 1 2.479-3.086 23.87 23.87 0 0 0 4.925-2.036v-.624c0-2.216-1.133-3.496-2.758-3.496a1.642 1.642 0 0 0-.82.18 1.904 1.904 0 0 0-.658.542 6.468 6.468 0 0 0-.837 2.02.886.886 0 0 1-.92.721 1.51 1.51 0 0 1-1.378-1.362c0-.443.41-.82 1.034-1.264a13.297 13.297 0 0 1 4.515-2.183 4.285 4.285 0 0 1 2.626.837 4.334 4.334 0 0 1 1.642 3.628v6.04c0 1.445.541 1.872 1.1 1.872a2.298 2.298 0 0 0 1.132-.344l.312.886L64.514 48Zm-2.281-7.912c-.69.344-2.2 1-2.922 1.313-1.182.525-1.905 1.132-1.905 2.282a2.282 2.282 0 0 0 2.25 2.413 4.186 4.186 0 0 0 2.577-1.133v-4.875ZM75.513 47.606h-7.272v-.87c1.97-.18 2.167-.345 2.167-2.38v-6.6c0-2.068-.132-2.15-1.954-2.38v-.739a17.925 17.925 0 0 0 4.416-1.28v3.43c1.1-1.64 2.413-3.282 3.99-3.282a1.642 1.642 0 0 1 1.805 1.51 2.1 2.1 0 0 1-1.067 1.724.608.608 0 0 1-.41.114.673.673 0 0 1-.395-.18 1.988 1.988 0 0 0-1.411-.788c-.657 0-1.823.968-2.512 2.56v5.878c0 2.068.164 2.232 2.577 2.413l.066.87ZM95.097 46.67c-1.62.254-3.221.616-4.793 1.084v-2.397a7.764 7.764 0 0 1-4.794 2.397c-2.101 0-3.907-1.28-3.907-4.679v-6.074c0-1.641-.262-1.871-1.034-2.035l-.886-.148v-.82c1.346 0 3.414-.378 4.481-.559-.098 1.001-.098 2.495-.098 4.564v4.251c0 2.758 1.444 3.53 2.856 3.53a4.925 4.925 0 0 0 3.365-1.461V37c0-1.641-.377-1.904-1.444-2.068l-1.002-.115v-.82a44.762 44.762 0 0 0 4.925-.559v10.473c0 1.56.246 1.79 1.445 1.839h.87l.016.92ZM3.48 10.999 0 23.77l35.048-11.442L38.528 0 3.48 10.999Z"
              fill="#fff"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
