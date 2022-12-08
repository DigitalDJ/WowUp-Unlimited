export interface CurseAuthorBlockRepresentation {
  authorId: string;
}

export interface CurseBlocksRepresentation {
  authors: CurseAuthorBlockRepresentation[];
}

export interface BlockListRepresentation {
  curse: CurseBlocksRepresentation;
}

export const EmptyBlockList: BlockListRepresentation = {
  curse: {
    authors: [] as CurseAuthorBlockRepresentation[]
  } as CurseBlocksRepresentation
};
