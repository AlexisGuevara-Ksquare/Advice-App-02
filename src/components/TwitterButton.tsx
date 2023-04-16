
type TwitterButton = {
    content: JSX.Element;
}

export const TwitterButton = ({content}:TwitterButton) => {
  return (
    <>
        <button className="button">{content}</button>
    </>
  )
}
