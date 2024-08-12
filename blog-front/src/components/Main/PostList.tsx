import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

const POST_ITEM_DATA = {
  title: 'React 시작하기',
  date: '2024.08.12.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'React를 사용하여 블로그 만들기 시작',
  thumbnail:
    'https://github.com/codemasterli/TechLog/blob/main/blog-front/contents/react.png?raw=true',
  link: 'https://www.google.co.kr',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
//실질적인 아이템 목록 
const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList