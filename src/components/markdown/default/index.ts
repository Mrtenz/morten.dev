import ThematicBreak from '../../ThematicBreak';
import Blockquote from './Blockquote';
import Code from './Code';
import DeletedText from './DeletedText';
import EmphasizedText from './EmphasizedText';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import Image from './Image';
import InlineCode from './InlineCode';
import Link from './Link';
import ListItem from './List/ListItem';
import OrderedList from './List/OrderedList';
import UnorderedList from './List/UnorderedList';
import Paragraph from './Paragraph';
import PreformattedText from './PreformattedText';
import StrongText from './StrongText';

/**
 * List of components that will be used when rendering markdown.
 */
export default {
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  strong: StrongText,
  em: EmphasizedText,
  del: DeletedText,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  pre: PreformattedText,
  code: Code,
  thematicBreak: ThematicBreak,
  hr: ThematicBreak,
  a: Link,
  img: Image
};
