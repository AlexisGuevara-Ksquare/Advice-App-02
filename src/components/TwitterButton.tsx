
// type of content Button will take
type TwitterButton = {
    content: JSX.Element;
    advice: string;
}

export const TwitterButton = ({content, advice}:TwitterButton) => {

  // Create URL so user can tweet advice
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
