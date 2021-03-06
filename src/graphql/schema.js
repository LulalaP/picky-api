/* eslint-disable import/no-named-as-default-member */
import { makeExecutableSchema, gql } from 'apollo-server';
import { merge } from 'lodash';

import Photo from './types/Photo';
import photoQuery from './queries/photo';
import createPhotoMutation from './mutations/createPhoto';
import User from './types/User';
import createUserMutation from './mutations/createUser';
import authorizeMutation from './mutations/authorize';
import usersQuery from './queries/users';
import authorizedUserQuery from './queries/authorizedUser';
import photosQuery from './queries/photos';
import PageInfo from './types/PageInfo';
import PhotoConnection from './types/PhotoConnection';
import OrderDirection from './enums/OrderDirection';
import createCollectionMutation from './mutations/createCollection';
import Collection from './types/Collection';
import CollectionConnection from './types/CollectionConnection';
import collectionQuery from './queries/collection';
import collectionsQuery from './queries/collections';
import deleteCollectionMutation from './mutations/deleteCollection';
import CollectedPhoto from './types/CollectedPhoto';
import CollectedPhotoConnection from './types/CollectedPhotoConnection';
import collectPhotoMutation from './mutations/collectPhoto';
import createCollectionAndCollectPhotoMutation from './mutations/createCollectionAndCollectPhoto';
import deleteCollectedPhotoMutation from './mutations/deleteCollectedPhoto';
import Like from './types/Like';
import LikeConnection from './types/LikeConnection';
import likesQuery from './queries/likes';
import isLikedPhotoQuery from './queries/isLikedPhoto';
import likePhotoMutation from './mutations/likePhoto';
import unlikePhotoMutation from './mutations/unlikePhoto';
import downloadPhotoMutation from './mutations/downloadPhoto';
import deletePhotoMutation from './mutations/deletePhoto';
import UserConnection from './types/UserConnection';
import PhotoReview from './types/PhotoReview';
import PhotoReviewConnection from './types/PhotoReviewConnection';
import createPhotoReviewMutation from './mutations/createPhotoReview';
import deletePhotoReviewMutation from './mutations/deletePhotoReview';
import CollectionReview from './types/CollectionReview';
import CollectionReviewConnection from './types/CollectionReviewConnection';
import createCollectionReviewMutation from './mutations/createCollectionReview';
import deleteCollectionReviewMutation from './mutations/deleteCollectionReview';
import photosInCollectionQuery from './queries/photosInCollection';
import collectedPhotosQuery from './queries/collectedPhotos';
import DateTime from './scalars/DateTime';
import editPhotosLabelMutation from './mutations/editPhotosLabel';
import updateUserProfileMutation from './mutations/updateUserProfile';
import deleteUserMutation from './mutations/deleteUser';
import changePasswordMutation from './mutations/changePassword';
import createAndLikePhotoMutation from './mutations/createAndLikePhoto';
import unlikeAndDeletePhotoMutation from './mutations/unlikeAndDeletePhoto';
import editCollectionMutation from './mutations/editCollection';

const rootTypeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const typeDefs = [
  rootTypeDefs,
  DateTime.typeDefs,
  Photo.typeDefs,
  photoQuery.typeDefs,
  createPhotoMutation.typeDefs,
  User.typeDefs,
  UserConnection.typeDefs,
  createUserMutation.typeDefs,
  authorizeMutation.typeDefs,
  usersQuery.typeDefs,
  authorizedUserQuery.typeDefs,
  photosQuery.typeDefs,
  PageInfo.typeDefs,
  PhotoConnection.typeDefs,
  OrderDirection.typeDefs,
  createCollectionMutation.typeDefs,
  Collection.typeDefs,
  CollectionConnection.typeDefs,
  collectionQuery.typeDefs,
  collectionsQuery.typeDefs,
  deleteCollectionMutation.typeDefs,
  CollectedPhoto.typeDefs,
  CollectedPhotoConnection.typeDefs,
  collectPhotoMutation.typeDefs,
  createCollectionAndCollectPhotoMutation.typeDefs,
  deleteCollectedPhotoMutation.typeDefs,
  Like.typeDefs,
  LikeConnection.typeDefs,
  likesQuery.typeDefs,
  isLikedPhotoQuery.typeDefs,
  likePhotoMutation.typeDefs,
  unlikePhotoMutation.typeDefs,
  downloadPhotoMutation.typeDefs,
  deletePhotoMutation.typeDefs,
  PhotoReview.typeDefs,
  PhotoReviewConnection.typeDefs,
  createPhotoReviewMutation.typeDefs,
  deletePhotoReviewMutation.typeDefs,
  CollectionReview.typeDefs,
  CollectionReviewConnection.typeDefs,
  createCollectionReviewMutation.typeDefs,
  deleteCollectionReviewMutation.typeDefs,
  photosInCollectionQuery.typeDefs,
  collectedPhotosQuery.typeDefs,
  editPhotosLabelMutation.typeDefs,
  updateUserProfileMutation.typeDefs,
  deleteUserMutation.typeDefs,
  changePasswordMutation.typeDefs,
  createAndLikePhotoMutation.typeDefs,
  unlikeAndDeletePhotoMutation.typeDefs,
  editCollectionMutation.typeDefs,
];

const resolvers = merge(
  DateTime.resolvers,
  Photo.resolvers,
  photoQuery.resolvers,
  createPhotoMutation.resolvers,
  User.resolvers,
  UserConnection.resolvers,
  createUserMutation.resolvers,
  authorizeMutation.resolvers,
  usersQuery.resolvers,
  authorizedUserQuery.resolvers,
  photosQuery.resolvers,
  PageInfo.resolvers,
  PhotoConnection.resolvers,
  OrderDirection.resolvers,
  createCollectionMutation.resolvers,
  createCollectionAndCollectPhotoMutation.resolvers,
  Collection.resolvers,
  CollectionConnection.resolvers,
  collectionQuery.resolvers,
  collectionsQuery.resolvers,
  deleteCollectionMutation.resolvers,
  CollectedPhoto.resolvers,
  CollectedPhotoConnection.resolvers,
  collectPhotoMutation.resolvers,
  deleteCollectedPhotoMutation.resolvers,
  Like.resolvers,
  LikeConnection.resolvers,
  likesQuery.resolvers,
  isLikedPhotoQuery.resolvers,
  likePhotoMutation.resolvers,
  unlikePhotoMutation.resolvers,
  downloadPhotoMutation.resolvers,
  deletePhotoMutation.resolvers,
  PhotoReview.resolvers,
  PhotoReviewConnection.resolvers,
  createPhotoReviewMutation.resolvers,
  deletePhotoReviewMutation.resolvers,
  CollectionReview.resolvers,
  CollectionReviewConnection.resolvers,
  createCollectionReviewMutation.resolvers,
  deleteCollectionReviewMutation.resolvers,
  photosInCollectionQuery.resolvers,
  collectedPhotosQuery.resolvers,
  editPhotosLabelMutation.resolvers,
  updateUserProfileMutation.resolvers,
  deleteUserMutation.resolvers,
  changePasswordMutation.resolvers,
  createAndLikePhotoMutation.resolvers,
  unlikeAndDeletePhotoMutation.resolvers,
  editCollectionMutation.resolvers,
);

const createSchema = () => {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
};

export default createSchema;
