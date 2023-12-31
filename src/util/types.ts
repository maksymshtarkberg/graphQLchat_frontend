import {
  ConversationPopulated,
  MessagePopulated,
} from "../../../backend/src/util/types";

/**
 * User
 */

export interface CreateUsernameData {
  createUsername: {
    succsess: boolean;
    error: string;
  };
}

export interface CreateUsernameVariables {
  username: string;
}

export interface SearchUsersInput {
  username: string;
}

export interface SearchUserData {
  searchUsers: Array<SearchedUser>;
}

export interface SearchedUser {
  id: string;
  username: string;
}

/**
 * Conversation
 */
export interface ConversationsData {
  conversations: Array<ConversationPopulated>;
}

export interface CreateConversationData {
  createConversation: {
    conversationId: string;
  };
}

export interface CreateConversationInput {
  participantIds: Array<string>;
}

export interface ConversationUpdatedData {
  conversationUpdated: {
    conversation: ConversationPopulated;
  };
}

export interface ConversationDeletedData {
  conversationDeleted: {
    id: string;
  };
}
/**
 * Messages
 */

export interface MessagesData {
  messages: Array<MessagePopulated>;
}

export interface MessagesVariables {
  conversationId: string;
}

export interface MessageSubscriptionData {
  subscriptionData: {
    data: {
      messageSent: MessagePopulated;
    };
  };
}
