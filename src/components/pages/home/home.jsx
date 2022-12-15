import { Span, Form } from '@/components/atoms';

const Home = () => {
  return (
    <div>
      <Span
        display="block"
        margin="16px"
        padding="16px"
        fontSize="16px"
        fontWeight="500"
        color="pink"
        lineHeight="16px"
      >
        <div>Hello World</div>
      </Span>

      <Form
        onFormSubmit={() => console.log('Hello World')}
        margin="16px"
        padding="16px"
        border="1px solid pink"
        borderRadius="16px"
      >
        <button type="submit">Hello World</button>
      </Form>
    </div>
  );
};

export default Home;
