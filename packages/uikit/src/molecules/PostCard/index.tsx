import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface PostCardProps {
  headerImage: string;
  title: string;
  standFirst: string;
  tag?: string;
  postedDate: Date;
  slug: string;
  inverted?: boolean;
}

export interface Tag {
  title?: string;
}

const Wrapper = styled.article`
  padding: 20px 40px;
`;

const Inner = styled.article`
  display: flex;
  width: 100%;
`;

const Image = styled.div`
  background-size: cover;
  min-height: 300px;
  background-image: url('http://www.placecage.com/c/375/300');
  padding-right: 30px;
  width: 50%;
  max-width: 375px;
`;

const Content = styled.div`
  padding-left: 30px;
  width: 50%;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: $green-day-700;
  }
`;

const PostCard = ({
  title,
  standFirst,
  headerImage,
  postedDate,
  slug,
  tag = undefined,
}: PostCardProps) => {
  return (
    <Wrapper data-slug={slug}>
      <Inner>
        <Image
          style={
            headerImage ? { backgroundImage: `url('${headerImage}')` } : {}
          }
        />
        <Content>
          <Link to={`/blog/${slug}`}>
            <h1>{title}</h1>
          </Link>
          <p data-qaid="snippet">{standFirst}</p>
          {tag && <Tag>{tag}</Tag>}
          {postedDate && <div>{postedDate.toLocaleDateString()}</div>}
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default PostCard;
