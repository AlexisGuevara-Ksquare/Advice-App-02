
type Button = {
    content: string;
    onClick?: () => void;
}

export const Button = ({content, onClick }:Button) => {
  return (
    <>
        <button className="button bttnNextOne" onClick={onClick}>{content}</button>
    </>
  )
}
