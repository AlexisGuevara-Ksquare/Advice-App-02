
type Button = {
    content: string | JSX.Element;
}

export const Button = ({content}:Button) => {
  return (
    <>
        <button className="button">{content}</button>
    </>
  )
}
