interface DonViNodeInfo {
  code: String;
  name: String;
  orgLevel: Number;
  status: Boolean;
}

interface DonViChildNodeInfo extends DonViNodeInfo {
  codeParent: String;
}

export interface ResponseDtoDonViTreeInfo extends DonViNodeInfo {
  lstChild: DonViChildNodeInfo[];
}
