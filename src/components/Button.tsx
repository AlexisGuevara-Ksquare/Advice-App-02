
type Button = {
    content: string;
}

export const Button = ({content}:Button) => {
  return (
    <>
        <button className="button">{content}</button>
    </>
  )
}
