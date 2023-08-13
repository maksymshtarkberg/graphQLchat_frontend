import { Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import MessagesHeader from "./Messages/Header";

interface FeedWrapperProps {
  session: Session;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({ session }) => {
  const router = useRouter();

  const { conversationId } = router.query;
  const {
    user: { id: userId },
  } = session;
  return (
    <Flex width="100%" direction="column">
      {conversationId && typeof conversationId === "string" ? (
        <Flex
          direction="column"
          justify="space-between"
          overflow="hidden"
          flexGrow={1}
        >
          {/* {conversationId} */}

          <MessagesHeader conversationId={conversationId} userId={userId} />
          {/* <Messages/> */}
        </Flex>
      ) : (
        <>No conversation selected</>
      )}
    </Flex>
  );
};

export default FeedWrapper;
