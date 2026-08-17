// reject user

export type RejectionPayload = {
  // userId: string;
  reasonCategory: string;
  reasonDetails?: string;
  rejectedAt: Date;
  rejectedBy: string;
};


export type RejectUserVariables = {
  userId: string;
  payload: RejectionPayload;
};



// block user
export type blockFormPayload = {
  // userId: string;
  reasonCategory: string;
  reasonDetails?: string;
  blockedAt: Date;
  blockedBy: string;
};


export type BlockUserVariables = {
  userId: string;
  payload: blockFormPayload;
};