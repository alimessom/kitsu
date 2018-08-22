// Main

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_USER_MENU = 'TOGGLE_USER_MENU'
export const SET_LAST_PRODUCTION_SCREEN = 'SET_LAST_PRODUCTION_SCREEN'

// People

export const LOAD_PEOPLE_START = 'LOAD_PEOPLE_START'
export const LOAD_PEOPLE_END = 'LOAD_PEOPLE_END'
export const LOAD_PEOPLE_ERROR = 'LOAD_PEOPLE_ERROR'

export const NEW_PEOPLE_END = 'NEW_PEOPLE_END'
export const SHOW_IMPORT_PEOPLE_MODAL = 'SHOW_IMPORT_PEOPLE_MODAL'
export const HIDE_IMPORT_PEOPLE_MODAL = 'HIDE_IMPORT_PEOPLE_MODAL'
export const PERSON_CSV_FILE_SELECTED = 'PERSON_CSV_FILE_SELECTED'
export const IMPORT_PEOPLE_START = 'IMPORT_PEOPLE_START'
export const IMPORT_PEOPLE_END = 'IMPORT_PEOPLE_END'
export const IMPORT_PEOPLE_ERROR = 'IMPORT_PEOPLE_ERROR'

export const DELETE_PEOPLE_START = 'DELETE_PEOPLE_START'
export const DELETE_PEOPLE_END = 'DELETE_PEOPLE_END'
export const DELETE_PEOPLE_ERROR = 'DELETE_PEOPLE_ERROR'
export const SHOW_DELETE_PEOPLE_MODAL = 'SHOW_DELETE_PEOPLE_MODAL'
export const HIDE_DELETE_PEOPLE_MODAL = 'HIDE_DELETE_PEOPLE_MODAL'

export const EDIT_PEOPLE_START = 'EDIT_PEOPLE_START'
export const EDIT_PEOPLE_END = 'EDIT_PEOPLE_END'
export const EDIT_PEOPLE_ERROR = 'EDIT_PEOPLE_ERROR'
export const SHOW_EDIT_PEOPLE_MODAL = 'SHOW_EDIT_PEOPLE_MODAL'
export const HIDE_EDIT_PEOPLE_MODAL = 'HIDE_EDIT_PEOPLE_MODAL'

export const LOAD_PERSON_TASKS_END = 'LOAD_PERSON_TASKS_END'
export const LOAD_PERSON_DONE_TASKS_END = 'LOAD_PERSON_DONE_TASKS_END'
export const SET_PERSON_TASKS_SEARCH = 'SET_PERSON_TASKS_SEARCH'
export const SAVE_PERSON_TASKS_SEARCH_END = 'SAVE_PERSON_TASKS_SEARCH_END'
export const REMOVE_PERSON_TASKS_SEARCH_END = 'REMOVE_PERSON_TASKS_SEARCH_END'

export const SET_TIME_SPENT = 'SET_TIME_SPENSET_TIME_SPENT'
export const PEOPLE_TIMESHEET_LOADED = 'PEOPLE_TIMESHEET_LOADED'
export const PERSON_LOAD_TIME_SPENTS_END = 'PERSON_LOAD_TIME_SPENTS_END'
export const SET_PERSON_TASKS_SCROLL_POSITION = 'SET_PERSON_TASKS_SCROLL_POSITION'

export const PEOPLE_SEARCH_CHANGE = 'PEOPLE_SEARCH_CHANGE'

// User

export const USER_SAVE_PROFILE_LOADING = 'USER_SAVE_PROFILE_LOADING'
export const USER_SAVE_PROFILE_ERROR = 'USER_SAVE_PROFILE_ERROR'
export const USER_SAVE_PROFILE_SUCCESS = 'USER_SAVE_PROFILE_SUCCESS'

export const CHANGE_AVATAR_FILE = 'CHANGE_AVATAR_FILE'
export const UPLOAD_AVATAR_START = 'UPLOAD_AVATAR_START'
export const UPLOAD_AVATAR_END = 'UPLOAD_AVATAR_END'
export const UPLOAD_AVATAR_ERROR = 'UPLOAD_AVATAR_ERROR'

export const USER_CHANGE_PASSWORD_LOADING = 'USER_CHANGE_PASSWORD_LOADING'
export const USER_CHANGE_PASSWORD_ERROR = 'USER_CHANGE_PASSWORD_ERROR'
export const USER_CHANGE_PASSWORD_SUCCESS = 'USER_CHANGE_PASSWORD_SUCCESS'
export const USER_CHANGE_PASSWORD_UNVALID = 'USER_CHANGE_PASSWORD_UNVALID'

export const USER_LOAD_TODOS_END = 'USER_LOAD_TODOS_END'
export const USER_LOAD_TODOS_START = 'USER_LOAD_TODOS_START'
export const USER_LOAD_TODOS_ERROR = 'USER_LOAD_TODOS_ERROR'
export const USER_LOAD_DONE_TASKS_END = 'USER_LOAD_DONE_TASKS_END'
export const USER_LOAD_TIME_SPENTS_END = 'USER_LOAD_TIME_SPENTS_END'

export const SET_TODOS_SEARCH = 'SET_TODOS_SEARCH'

export const LOAD_USER_FILTERS_END = 'LOAD_USER_FILTERS_END'
export const LOAD_USER_FILTERS_ERROR = 'LOAD_USER_FILTERS_ERROR'
export const SET_TODO_LIST_SCROLL_POSITION = 'SET_TODO_LIST_SCROLL_POSITION'

// Tasks

export const LOAD_TASK_END = 'LOAD_TASK_END'
export const NEW_TASK_COMMENT_END = 'NEW_TASK_COMMENT_END'
export const NEW_TASK_END = 'NEW_TASK_END'
export const EDIT_TASK_END = 'EDIT_TASK_END'
export const LOAD_TASK_COMMENTS_END = 'LOAD_TASK_COMMENTS_END'
export const CREATE_TASKS_END = 'CREATE_TASKS_END'
export const DELETE_TASK_END = 'DELETE_TASK_END'
export const EDIT_COMMENT_END = 'EDIT_COMMENT_END'
export const DELETE_COMMENT_END = 'DELETE_COMMENT_END'

export const PREVIEW_FILE_SELECTED = 'PREVIEW_FILE_SELECTED'
export const ADD_PREVIEW_END = 'ADD_PREVIEW_END'
export const CHANGE_PREVIEW_END = 'CHANGE_PREVIEW_END'

export const ADD_SELECTED_TASK = 'ADD_SELECTED_TASK'
export const REMOVE_SELECTED_TASK = 'REMOVE_SELECTED_TASK'
export const CLEAR_SELECTED_TASKS = 'CLEAR_SELECTED_TASKS'

export const ASSIGN_TASKS = 'ASSIGN_TASKS'
export const UNASSIGN_TASKS = 'UNASSIGN_TASKS'

// Productions

export const LOAD_PRODUCTIONS_START = 'LOAD_PRODUCTIONS_START'
export const LOAD_PRODUCTIONS_END = 'LOAD_PRODUCTIONS_END'
export const LOAD_PRODUCTIONS_ERROR = 'LOAD_PRODUCTIONS_ERROR'

export const LOAD_OPEN_PRODUCTIONS_START = 'LOAD_OPEN_PRODUCTIONS_START'
export const LOAD_OPEN_PRODUCTIONS_END = 'LOAD_OPEN_PRODUCTIONS_END'
export const LOAD_OPEN_PRODUCTIONS_ERROR = 'LOAD_OPEN_PRODUCTIONS_ERROR'

export const LOAD_PRODUCTION_STATUS_START = 'LOAD_PRODUCTION_STATUS_START'
export const LOAD_PRODUCTION_STATUS_END = 'LOAD_PRODUCTION_STATUS_END'
export const LOAD_PRODUCTION_STATUS_ERROR = 'LOAD_PRODUCTION_STATUS_ERROR'

export const NEW_PRODUCTION_END = 'NEW_PRODUCTION_END'

export const EDIT_PRODUCTION_START = 'EDIT_PRODUCTION_START'
export const EDIT_PRODUCTION_END = 'EDIT_PRODUCTION_END'
export const EDIT_PRODUCTION_ERROR = 'EDIT_PRODUCTION_ERROR'

export const DELETE_PRODUCTION_START = 'DELETE_PRODUCTION_START'
export const DELETE_PRODUCTION_END = 'DELETE_PRODUCTION_END'
export const DELETE_PRODUCTION_ERROR = 'DELETE_PRODUCTION_ERROR'

export const SET_CURRENT_PRODUCTION = 'SET_CURRENT_PRODUCTION'

export const PRODUCTION_PICTURE_FILE_SELECTED = 'PRODUCTION_PICTURE_FILE_SELECTED'
export const PRODUCTION_AVATAR_UPLOADED = 'PRODUCTION_AVATAR_UPLOADED'

// Task types

export const LOAD_TASK_TYPES_START = 'LOAD_TASK_TYPES_START'
export const LOAD_TASK_TYPES_END = 'LOAD_TASK_TYPES_END'
export const LOAD_TASK_TYPES_ERROR = 'LOAD_TASK_TYPES_ERROR'

export const NEW_TASK_TYPE_END = 'NEW_TASK_TYPE_END'

export const EDIT_TASK_TYPE_START = 'EDIT_TASK_TYPE_START'
export const EDIT_TASK_TYPE_END = 'EDIT_TASK_TYPE_END'
export const EDIT_TASK_TYPE_ERROR = 'EDIT_TASK_TYPE_ERROR'

export const DELETE_TASK_TYPE_START = 'DELETE_TASK_TYPE_START'
export const DELETE_TASK_TYPE_END = 'DELETE_TASK_TYPE_END'
export const DELETE_TASK_TYPE_ERROR = 'DELETE_TASK_TYPE_ERROR'

// Task status

export const LOAD_TASK_STATUSES_START = 'LOAD_TASK_STATUSES_START'
export const LOAD_TASK_STATUSES_END = 'LOAD_TASK_STATUSES_END'
export const LOAD_TASK_STATUSES_ERROR = 'LOAD_TASK_STATUSES_ERROR'

export const NEW_TASK_STATUS_END = 'NEW_TASK_STATUS_END'

export const EDIT_TASK_STATUS_START = 'EDIT_TASK_STATUS_START'
export const EDIT_TASK_STATUS_END = 'EDIT_TASK_STATUS_END'
export const EDIT_TASK_STATUS_ERROR = 'EDIT_TASK_STATUS_ERROR'

export const DELETE_TASK_STATUS_START = 'DELETE_TASK_STATUS_START'
export const DELETE_TASK_STATUS_END = 'DELETE_TASK_STATUS_END'
export const DELETE_TASK_STATUS_ERROR = 'DELETE_TASK_STATUS_ERROR'

// Custom Actions

export const LOAD_CUSTOM_ACTIONS_START = 'LOAD_CUSTOM_ACTIONS_START'
export const LOAD_CUSTOM_ACTIONS_END = 'LOAD_CUSTOM_ACTIONS_END'
export const LOAD_CUSTOM_ACTIONS_ERROR = 'LOAD_CUSTOM_ACTIONS_ERROR'

export const NEW_CUSTOM_ACTION_END = 'NEW_CUSTOM_ACTION_END'

export const EDIT_CUSTOM_ACTION_START = 'EDIT_CUSTOM_ACTION_START'
export const EDIT_CUSTOM_ACTION_END = 'EDIT_CUSTOM_ACTION_END'
export const EDIT_CUSTOM_ACTION_ERROR = 'EDIT_CUSTOM_ACTION_ERROR'

export const DELETE_CUSTOM_ACTION_START = 'DELETE_CUSTOM_ACTION_START'
export const DELETE_CUSTOM_ACTION_END = 'DELETE_CUSTOM_ACTION_END'
export const DELETE_CUSTOM_ACTION_ERROR = 'DELETE_CUSTOM_ACTION_ERROR'

// Asset types

export const LOAD_ASSET_TYPES_START = 'LOAD_ASSET_TYPES_START'
export const LOAD_ASSET_TYPES_END = 'LOAD_ASSET_TYPES_END'
export const LOAD_ASSET_TYPES_ERROR = 'LOAD_ASSET_TYPES_ERROR'

export const NEW_ASSET_TYPE_END = 'NEW_ASSET_TYPE_END'

export const EDIT_ASSET_TYPE_START = 'EDIT_ASSET_TYPE_START'
export const EDIT_ASSET_TYPE_END = 'EDIT_ASSET_TYPE_END'
export const EDIT_ASSET_TYPE_ERROR = 'EDIT_ASSET_TYPE_ERROR'

export const DELETE_ASSET_TYPE_START = 'DELETE_ASSET_TYPE_START'
export const DELETE_ASSET_TYPE_END = 'DELETE_ASSET_TYPE_END'
export const DELETE_ASSET_TYPE_ERROR = 'DELETE_ASSET_TYPE_ERROR'

export const SET_ASSET_LIST_SCROLL_POSITION = 'SET_ASSET_LIST_SCROLL_POSITION'
export const SET_PRODUCTION_ASSET_TYPE_LIST_SCROLL_POSITION = 'SET_PRODUCTION_ASSET_TYPE_LIST_SCROLL_POSITION'

// Assets

export const LOAD_ASSETS_START = 'LOAD_ASSETS_START'
export const LOAD_ASSETS_END = 'LOAD_ASSETS_END'
export const LOAD_ASSETS_ERROR = 'LOAD_ASSETS_ERROR'
export const LOAD_ASSET_END = 'LOAD_ASSET_END'
export const LOAD_ASSET_CAST_IN_END = 'LOAD_ASSET_CAST_IN_END'

export const ASSET_CSV_FILE_SELECTED = 'ASSET_CSV_FILE_SELECTED'
export const IMPORT_ASSETS_START = 'IMPORT_ASSETS_START'
export const IMPORT_ASSETS_END = 'IMPORT_ASSETS_END'
export const IMPORT_ASSETS_ERROR = 'IMPORT_ASSETS_ERROR'

export const NEW_ASSET_END = 'NEW_ASSET_END'

export const EDIT_ASSET_START = 'EDIT_ASSET_START'
export const EDIT_ASSET_END = 'EDIT_ASSET_END'
export const EDIT_ASSET_ERROR = 'EDIT_ASSET_ERROR'

export const DELETE_ASSET_START = 'DELETE_ASSET_START'
export const DELETE_ASSET_END = 'DELETE_ASSET_END'
export const DELETE_ASSET_ERROR = 'DELETE_ASSET_ERROR'

export const RESTORE_ASSET_START = 'RESTORE_ASSET_START'
export const RESTORE_ASSET_END = 'RESTORE_ASSET_END'
export const RESTORE_ASSET_ERROR = 'RESTORE_ASSET_ERROR'

export const SET_ASSET_SEARCH = 'SET_ASSET_SEARCH'
export const SAVE_ASSET_SEARCH_END = 'SAVE_ASSET_SEARCH_END'
export const REMOVE_ASSET_SEARCH_END = 'REMOVE_ASSET_SEARCH_END'
export const DISPLAY_MORE_ASSETS = 'DISPLAY_MORE_ASSETS'

export const COMPUTE_ASSET_TYPE_STATS = 'COMPUTE_ASSET_TYPE_STATS'
export const SET_ASSET_TYPE_SEARCH = 'SET_ASSET_TYPE_SEARCH'

// Shots

export const LOAD_SHOTS_START = 'LOAD_SHOTS_START'
export const LOAD_SHOTS_END = 'LOAD_SHOTS_END'
export const LOAD_SHOTS_ERROR = 'LOAD_SHOTS_ERROR'
export const LOAD_SEQUENCES_END = 'LOAD_SEQUENCES_END'
export const LOAD_EPISODES_END = 'LOAD_EPISODES_END'
export const LOAD_SHOT_END = 'LOAD_SHOT_END'
export const LOAD_SHOT_CASTING_END = 'LOAD_SHOT_CASTING_END'

export const SHOT_CSV_FILE_SELECTED = 'SHOT_CSV_FILE_SELECTED'
export const IMPORT_SHOTS_START = 'IMPORT_SHOTS_START'
export const IMPORT_SHOTS_END = 'IMPORT_SHOTS_END'
export const IMPORT_SHOTS_ERROR = 'IMPORT_SHOTS_ERROR'

export const EDIT_SHOT_START = 'EDIT_SHOT_START'
export const EDIT_SHOT_END = 'EDIT_SHOT_END'
export const EDIT_SHOT_ERROR = 'EDIT_SHOT_ERROR'

export const EDIT_SEQUENCE_START = 'EDIT_SEQUENCE_START'
export const EDIT_SEQUENCE_END = 'EDIT_SEQUENCE_END'
export const EDIT_SEQUENCE_ERROR = 'EDIT_SEQUENCE_ERROR'

export const EDIT_EPISODE_START = 'EDIT_EPISODE_START'
export const EDIT_EPISODE_END = 'EDIT_EPISODE_END'
export const EDIT_EPISODE_ERROR = 'EDIT_EPISODE_ERROR'

export const NEW_SHOT_START = 'NEW_SHOT_START'
export const NEW_SHOT_END = 'NEW_SHOT_END'
export const NEW_SHOT_ERROR = 'NEW_SHOT_ERROR'

export const NEW_SEQUENCE_START = 'NEW_SEQUENCE_START'
export const NEW_SEQUENCE_END = 'NEW_SEQUENCE_END'
export const NEW_SEQUENCE_ERROR = 'NEW_SEQUENCE_ERROR'

export const NEW_EPISODE_START = 'NEW_EPISODE_START'
export const NEW_EPISODE_END = 'NEW_EPISODE_END'
export const NEW_EPISODE_ERROR = 'NEW_EPISODE_ERROR'

export const DELETE_SHOT_START = 'DELETE_SHOT_START'
export const DELETE_SHOT_END = 'DELETE_SHOT_END'
export const DELETE_SHOT_ERROR = 'DELETE_SHOT_ERROR'

export const DELETE_SEQUENCE_START = 'DELETE_SEQUENCE_START'
export const DELETE_SEQUENCE_END = 'DELETE_SEQUENCE_END'
export const DELETE_SEQUENCE_ERROR = 'DELETE_SEQUENCE_ERROR'

export const DELETE_EPISODE_START = 'DELETE_EPISODE_START'
export const DELETE_EPISODE_END = 'DELETE_EPISODE_END'
export const DELETE_EPISODE_ERROR = 'DELETE_EPISODE_ERROR'

export const RESTORE_SHOT_START = 'RESTORE_SHOT_START'
export const RESTORE_SHOT_END = 'RESTORE_SHOT_END'
export const RESTORE_SHOT_ERROR = 'RESTORE_SHOT_ERROR'

export const SET_SHOT_SEARCH = 'SET_SHOT_SEARCH'
export const SAVE_SHOT_SEARCH_END = 'SAVE_SHOT_SEARCH_END'
export const REMOVE_SHOT_SEARCH_END = 'REMOVE_SHOT_SEARCH_END'

export const SET_SEQUENCE_SEARCH = 'SET_SEQUENCE_SEARCH'
export const SET_EPISODE_SEARCH = 'SET_EPISODE_SEARCH'

export const DISPLAY_MORE_SHOTS = 'DISPLAY_MORE_SHOTS'
export const DISPLAY_MORE_SEQUENCES = 'DISPLAY_MORE_SEQUENCES'
export const DISPLAY_MORE_EPISODES = 'DISPLAY_MORE_EPISODES'

export const SET_SHOT_LIST_SCROLL_POSITION = 'SET_SHOT_LIST_SCROLL_POSITION'
export const SET_SEQUENCE_LIST_SCROLL_POSITION = 'SET_SEQUENCE_LIST_SCROLL_POSITION'
export const SET_EPISODE_LIST_SCROLL_POSITION = 'SET_EPISODE_LIST_SCROLL_POSITION'

export const COMPUTE_SEQUENCE_STATS = 'COMPUTE_SEQUENCE_STATS'
export const COMPUTE_EPISODE_STATS = 'COMPUTE_EPISODE_STATS'

// Profile and auth

export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const LOGIN_RUN = 'LOGIN_RUN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const SAVE_TODO_SEARCH_END = 'SAVE_TODO_SEARCH_END'
export const REMOVE_TODO_SEARCH_END = 'REMOVE_TODO_SEARCH_END'

// Casting

export const CASTING_SET_SHOT = 'CASTING_SET_SHOT'
export const CASTING_SET_SEQUENCE = 'CASTING_SET_SEQUENCE'
export const CASTING_SET_EPISODE = 'CASTING_SET_EPISODE'
export const CASTING_SET_CASTING = 'CASTING_SET_CASTING'
export const CASTING_SET_SHOTS = 'CASTING_SET_SHOTS'
export const CASTING_SET_SEQUENCES = 'CASTING_SET_SEQUENCES'
export const CASTING_SET_ISDIRTY = 'CASTING_SET_ISDIRTY'

export const CASTING_ADD_TO_CASTING = 'CASTING_ADD_TO_CASTING'
export const CASTING_REMOVE_FROM_CASTING = 'CASTING_REMOVE_FROM_CASTING'

// Playlists

export const LOAD_PLAYLISTS_START = 'LOAD_PLAYLISTS_START'
export const LOAD_PLAYLISTS_END = 'LOAD_PLAYLISTS_END'
export const LOAD_PLAYLISTS_ERROR = 'LOAD_PLAYLISTS_ERROR'

export const LOAD_PLAYLIST_START = 'LOAD_PLAYLIST_START'
export const LOAD_PLAYLIST_END = 'LOAD_PLAYLIST_END'
export const LOAD_PLAYLIST_ERROR = 'LOAD_PLAYLIST_ERROR'

export const NEW_PLAYLIST_END = 'NEW_PLAYLIST_END'

export const EDIT_PLAYLIST_START = 'EDIT_PLAYLIST_START'
export const EDIT_PLAYLIST_END = 'EDIT_PLAYLIST_END'
export const EDIT_PLAYLIST_ERROR = 'EDIT_PLAYLIST_ERROR'

export const DELETE_PLAYLIST_START = 'DELETE_PLAYLIST_START'
export const DELETE_PLAYLIST_END = 'DELETE_PLAYLIST_END'
export const DELETE_PLAYLIST_ERROR = 'DELETE_PLAYLIST_ERROR'

export const ADD_SHOT_TO_PLAYLIST = 'ADD_SHOT_TO_PLAYLIST'
export const REMOVE_SHOT_FROM_PLAYLIST = 'REMOVE_SHOT_FROM_PLAYLIST'
export const CHANGE_PLAYLIST_PREVIEW = 'CHANGE_PLAYLIST_PREVIEW'
export const LOAD_SHOT_PREVIEW_FILES_END = 'LOAD_SHOT_PREVIEW_FILES_END'

// Notifications

export const LOAD_NOTIFICATIONS_END = 'LOAD_NOTIFICATIONS_END'
export const LOAD_NOTIFICATION_END = 'LOAD_NOTIFICATION_END'
export const MARK_ALL_NOTIFICATIONS_AS_READ = 'MARK_ALL_NOTIFICATIONS_AS_READ'
export const NOTIFICATION_ADD_PREVIEW = 'NOTIFICATION_ADD_PREVIEW'
export const LOAD_TASK_SUBSCRIBE_END = 'LOAD_TASK_SUBSCRIBE_END'
export const LOAD_SEQUENCE_SUBSCRIBE_END = 'LOAD_SEQUENCE_SUBSCRIBE_END'
export const LOAD_SEQUENCE_SUBSCRIPTION_END = 'LOAD_SEQUENCE_SUBSCRIPTION_END'

// Misc

export const SET_PREVIEW = 'SET_PREVIEW'
export const SET_IS_SHOW_ASSIGNATIONS = 'SET_IS_SHOW_ASSIGNATIONS'
export const RESET_ALL = 'RESET_ALL'
