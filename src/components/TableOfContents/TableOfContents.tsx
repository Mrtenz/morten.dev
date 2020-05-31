import React, { FunctionComponent } from 'react';
import Link from '../markdown/default/Link';
import ListItem from '../markdown/default/List/ListItem';
import UnorderedList from '../markdown/default/List/UnorderedList';

interface Props {
  items: {
    url: string;
    title: string;
  }[];
}

const TableOfContents: FunctionComponent<Props> = ({ items }) => (
  <UnorderedList>
    {items.map((item) => (
      <ListItem key={item.url}>
        <Link href={item.url}>{item.title}</Link>
      </ListItem>
    ))}
  </UnorderedList>
);

export default TableOfContents;
