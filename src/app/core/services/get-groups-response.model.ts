export interface GetGroupsResponseModel {
  groups: GroupModel[]
}

export interface GroupModel {
  id: number
  name: string
  avatar: AvatarModel
  members: GroupMemberModel[]
}

export interface GroupMemberModel {
  id: number
  first_name: string
  last_name: string
}

export interface AvatarModel {
  small: string
}
