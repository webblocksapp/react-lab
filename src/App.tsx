import { Div } from './Div';
import { Button } from './Button';
import { Card } from './Card';

export const App = () => {
  return (
    <>
      {/* <div style={{ background: 'red' }}>XXXXXX</div>
      <Div style={{ background: 'red' }}>Hello World</Div> */}
      {/* <button
        className="btn btn-secondary"
        onClick={(e) => {
          alert(e.currentTarget.innerText);
        }}
      >
        Text 1
      </button>
      <Button
        onClick={(e) => {
          alert(e.currentTarget.innerText);
        }}
      >
        Text 2
      </Button>
      <Button variant="warning">Warning</Button> */}
      <div style={{ padding: '20px' }}>
        <Card borderColor="red" borderWidth={1} borderStyle="solid">
          Hello World 1
        </Card>
      </div>
    </>
  );
};
