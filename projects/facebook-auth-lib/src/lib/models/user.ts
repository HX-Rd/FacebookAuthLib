export interface User {
  id?:                                string;
  about?:                             string;
  address?:                           Location;
  age_range?:                         AgeRange;
  admin_notes?:                       PageAdminNotes[];
  birthday?:                          string;
  email?:                             string;
  first_name?:                        string;
  hometown?:                          any;
  install_type?:                      string;
  installed?:                         boolean;
  is_famedeeplinkinguser?:            boolean;
  last_name?:                         string;
  location?:                          any;
  middle_name?:                       string;
  name?:                              string;
  name_format?:                       string;
  payment_pricepoints?:               PaymentPricepoints;
  security_settings?:                 SecuritySettings;
  test_group?:                        number;
  video_upload_limits?:               VideoUploadLimits;
  viewer_can_send_gift?:              boolean;
  can_review_measurement_request?:    boolean;
  context?:                           UserContext;
  employee_number?:                   string;
  favorite_athletes?:                 Experience[];
  favorite_teams?:                    Experience[];
  gender?:                            string;
  inspirational_people?:              Experience[];
  is_shared_login?:                   boolean;
  labels?:                            PageLabel[];
  languages?:                         Experience[];
  link?:                              string;
  meeting_for?:                       string[];
  political?:                         string;
  profile_pic?:                       string;
  public_key?:                        string;
  quotes?:                            string;
  relationship_status?:               string;
  religion?:                          string;
  shared_login_upgrade_required_by?:  Date;
  short_name?:                        string;
  significant_other?:                 User;
  sports?:                            Experience[];
  token_for_business?:                string;
}

export interface PaymentPricepoints {
  mobile?: Mobile[];
}

export interface Mobile {
  credits?:        number;
  local_currency?: string;
  user_price?:     string;
}

export interface SecuritySettings {
  secure_browsing?: SecureBrowsing;
}

export interface SecureBrowsing {
  enabled?: boolean;
}

export interface VideoUploadLimits {
  length?: number;
  size?:   number;
}

export interface Location {
  city?:          string;
  city_id?:       number;
  country?:       string;
  country_code?:  string;
  latitude?:      string;
  located_in?:    string;
  longitude?:     number;
  name?:          string;
  region?:        string;
  region_id?:     number;
  state?:         string;
  street?:        string;
  zip?:           string;
}

export interface AgeRange {
  min?:     number;
  max?:     number;
}

export interface PageAdminNotes {
  body?:    string;
  from?:    any;
  id?:      string;
  user?:    User;
}

export interface UserContext {
  id?:  string;
}

export interface Experience {
  id?:            string;
  description?:   string;
  from?:          User;
  name?:          string;
  with?:          User[];
}

export interface PageLabel {
  creation_time?: Date;
  creator_id?:    any;
  from?:          any;
  id?:            string
  name?:          string;
}
