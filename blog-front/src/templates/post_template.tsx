import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
//import { PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import { PostFrontmatterType } from 'types/PostItem.types'



type PostTemplateProps = {
    data: {
      allMarkdownRemark: {
        edges: PostPageItemType[]
      }
    }
    location: {
      href: string
    }
  }

  export type PostPageItemType = {
    node: {
      html: string
      frontmatter: PostFrontmatterType
    }
}

  const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
    data: {
      allMarkdownRemark: { edges },
    },
    location: { href },
  }) {
    const {
      node: {
        html,
        frontmatter: {
          title,
          summary,
          date,
          categories,
          thumbnail: {
            childImageSharp: { gatsbyImageData },
            publicURL,
          },
        },
      },
    } = edges[0];
  
    return (
      <Template title={title} description={summary} url={href} image={publicURL}>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
        />
        <PostContent html={html} />
        <CommentWidget />
      </Template>
    )
  }

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`

// export type PostPageItemType = {
//     node: {
//       html: string
//       frontmatter: PostFrontmatterType
//     }
//   }