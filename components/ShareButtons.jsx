'use client'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon

} from 'react-share'

const ShareButtons = ({ part, PUBLIC_DOMAIN }) => {

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/parts/${part._id}`


  return (
    <>

      <h3 className="text-xl font-bold text-center pt-2">Share this part</h3>
      <div className="flex justify-center pb-5 gap-2">
      <FacebookShareButton url={shareUrl} quote={part.part_name} hashtag='part4sale'>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
          url={shareUrl}
          title={part.part_name}
          hashtags={["part4sale"]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      <LinkedinShareButton
          url={shareUrl}
          title={part.part_name}
          summary={part.description}
          source={PUBLIC_DOMAIN}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={part.part_name}
          body={`Check out this part: ${shareUrl}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>

    </>
  )
}

export default ShareButtons