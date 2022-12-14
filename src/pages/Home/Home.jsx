import { Span, Form } from '@/components/atoms';

export function Home() {
  return (
    <div>
      <Span
        text="Hello World"
        display="block"
        margin="16px"
        padding="16px"
        font-size="16px"
        color="pink"
        lineHeight="16rem"
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
}
