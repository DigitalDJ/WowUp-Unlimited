export type CurseGameVersionFlavor = "wow_retail" | "wow_classic" | "wow_burning_crusade";

// see https://addons-ecs.forgesvc.net/api/v2/category/section/1
export enum CurseAddonCategory {
  ChatCommunication = 1001,
  AuctionEconomy = 1002,
  AudioVideo = 1003,
  PvP = 1004,
  BuffsDebuffs = 1005,
  Artwork = 1006,
  DataExport = 1007,
  Guild = 1008,
  BagsInventory = 1009,
  Libraries = 1010,
  MapMinimap = 1011,
  Mail = 1012,
  QuestsLeveling = 1013,
  BossEncounters = 1014,
  Professions = 1015,
  UnitFrames = 1016,
  Miscellaneous = 1017,
  ActionBars = 1018,
  Combat = 1019,
  Class = 1020,
  Mage = 1021,
  Paladin = 1022,
  Druid = 1023,
  Hunter = 1024,
  Shaman = 1025,
  Priest = 1026,
  Rogue = 1027,
  Warrior = 1028,
  Warlock = 1029,
  DevelopmentTools = 1031,
  Healer = 1032,
  Tank = 1033,
  Caster = 1034,
  DamageDealer = 1035,
  DeathKnight = 1036,
  RaidFrames = 1037,
  Minigames = 1038,
  HUDs = 1039,
  Arena = 1040,
  Battleground = 1041,
  Alchemy = 1042,
  Blacksmithing = 1043,
  Cooking = 1044,
  Enchanting = 1045,
  Engineering = 1046,
  FirstAid = 1047,
  Fishing = 1048,
  Herbalism = 1049,
  Jewelcrafting = 1050,
  Leatherworking = 1051,
  Mining = 1052,
  Skinning = 1053,
  Tailoring = 1054,
  Tooltip = 1055,
  Inscription = 1059,
  Roleplay = 1060,
  Plugins = 1063,
  FuBar = 1064,
  TitanPanel = 1065,
  DataBroker = 1066,
  Achievements = 1067,
  Companions = 1085,
  Archaeology = 1103,
  Transmogrification = 1171,
  Monk = 1242,
  BattlePets = 1243,
  Garrison = 1469,
  DemonHunters = 1502,
  TwitchIntegration = 4675,
}
