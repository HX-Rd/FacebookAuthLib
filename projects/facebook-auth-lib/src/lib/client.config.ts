export class ClientConfig {
    redirectUrl: string;
    clientId: string;
    redirectAfterLogin?: string;
    redirectAfterLogout?: string;
    userFields?: string[];
    scopes?: string[];
}

let defaultUserFields: string [] = [
  'id',
  'address',
  'age_range',
  'birthday',
  'education',
  'email',
  'favorite_athletes',
  'favorite_teams',
  'first_name',
  'gender',
  'hometown',
  'inspirational_people',
  'install_type',
  'installed',
  'interested_in',
  'is_famedeeplinkinguser',
  'languages',
  'last_name',
  'link',
  'location',
  'meeting_for',
  'middle_name',
  'name',
  'name_format',
  'payment_pricepoints',
  'political',
  'public_key',
  'quotes',
  'relationship_status',
  'religion',
  'security_settings',
  'significant_other',
  'sports',
  'test_group',
  'video_upload_limits',
  'viewer_can_send_gift',
  'website',
  'work'
];
export { defaultUserFields };

let defaultScopes: string[] = [
  'user_birthday',
  'user_hometown',
  'user_location',
  'user_likes',
  'user_events',
  'user_photos',
  'user_videos',
  'user_friends',
  'user_status',
  'user_tagged_places',
  'user_posts',
  'user_gender',
  'user_link',
  'user_age_range',
  'email',
  'groups_access_member_info',
  'public_profile'
];
export { defaultScopes };

/*
FULL LIST FIELDS
'about',
'id',
'address',
'age_range',
'birthday',
'education',
'email',
'employee_number',
'favorite_athletes',
'favorite_teams',
'first_name',
'gender',
'hometown',
'inspirational_people',
'install_type',
'installed',
'interested_in',
'is_famedeeplinkinguser',
'languages',
'last_name',
'link',
'location',
'meeting_for',
'middle_name',
'name',
'name_format',
'payment_pricepoints',
'political',
'public_key',
'quotes',
'relationship_status',
'religion',
'security_settings',
'significant_other',
'sports',
'test_group',
'token_for_business',
'video_upload_limits',
'viewer_can_send_gift',
'website',
'work'
*/
