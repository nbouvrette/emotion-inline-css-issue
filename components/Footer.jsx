import {
  basicStyles,
  otherStyles,
  someMoreBasicStyles,
  someCssAsObject,
  combinedAsArray,
  cxExample,
  keyframesExample,
} from '../shared/styles';

export default function Footer() {
  return (
    <footer>
      <div className={basicStyles}>basicStyles</div>
      <div className={otherStyles}>otherStyles</div>
      <div className={someMoreBasicStyles}>someMoreBasicStyles</div>
      <div className={someCssAsObject}>someCssAsObject</div>
      <div className={combinedAsArray}>combinedAsArray</div>
      <div className={cxExample}>cxExample</div>
      <div className={keyframesExample}>keyframesExample</div>
    </footer>
  );
}
