
type TwitterButton = {
    content: JSX.Element;
    advice: string;
}

export const TwitterButton = ({content, advice}:TwitterButton) => {

  let tweet = () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${advice}`;
    window.open(tweetURL, "_blank");    
  }

  return (
    <>
        <button className="button bttnTweet" onClick={tweet}>{content}</button>
    </>
  )
}
