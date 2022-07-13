import Image from "next/image";
import Link from "next/link";

import { PostsNode } from "types/wpTop";

type Props = {
  blogPosts: PostsNode[];
};

const Blog = ({ blogPosts }: Props) => {
  return (
    <div>
      {blogPosts.map((value) => {
        return (
          <Link href={"/blog/" + value.slug} key={value.id} prefetch={false}>
            <a>
              <div className="flex h-24 px-4 py-3 sm:hover:bg-light-gray">
                <div className="h-[72px] w-32">
                  <Image
                    src={
                      value.featuredImage?.node.sourceUrl
                        ? value.featuredImage.node.sourceUrl
                        : "/img/ogp.png"
                    }
                    width="128px"
                    height="72px"
                    alt="profile"
                  />
                </div>

                <div className="flex-auto pl-4">
                  <div className="h-14">{value.title}</div>
                  <div className="text-right text-xs">
                    {value.date.toString()}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
