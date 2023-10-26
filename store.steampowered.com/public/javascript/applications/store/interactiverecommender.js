/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9682],
  {
    76603: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "interactiverecommender_App_u3SD8",
        Login: "interactiverecommender_Login_3wfCR",
        Text: "interactiverecommender_Text_1PXPv",
        Container: "interactiverecommender_Container_2g8SX",
        TopSection: "interactiverecommender_TopSection_fR3i6",
        Header: "interactiverecommender_Header_2CDNs",
        Body: "interactiverecommender_Body_174-d",
        Spacer: "interactiverecommender_Spacer_1f2cz",
        BottomSection: "interactiverecommender_BottomSection_3A60h",
        VerticalBar: "interactiverecommender_VerticalBar_2qL2p",
        PlaytimeList: "interactiverecommender_PlaytimeList_3qtYu",
        Loading: "interactiverecommender_Loading_3pjYy",
        IdentityBlock: "interactiverecommender_IdentityBlock_qLWcn",
        Avatar: "interactiverecommender_Avatar_VmdbP",
        PersonalInfo: "interactiverecommender_PersonalInfo_2oJXF",
        Persona: "interactiverecommender_Persona_2vp7F",
        GameCount: "interactiverecommender_GameCount_1AIEP",
        TotalTime: "interactiverecommender_TotalTime_1tOWe",
        PlayedGame: "interactiverecommender_PlayedGame_sNb81",
        Ignored: "interactiverecommender_Ignored_30mws",
        PlaytimeInfo: "interactiverecommender_PlaytimeInfo_1UkGo",
        IgnoreToggle: "interactiverecommender_IgnoreToggle_3hXvg",
        Logo: "interactiverecommender_Logo_26qua",
        HoursPlayed: "interactiverecommender_HoursPlayed_3Ye_W",
        Title: "interactiverecommender_Title_Eucai",
        LastPlayed: "interactiverecommender_LastPlayed_1DwCl",
        UpdateSaveBlock: "interactiverecommender_UpdateSaveBlock_iaGmJ",
        UpdateButton: "interactiverecommender_UpdateButton_wcFtI",
        Enabled: "interactiverecommender_Enabled_3QyVu",
        RecommendationList: "interactiverecommender_RecommendationList_1krh3",
        List: "interactiverecommender_List_C6mYR",
        Updating: "interactiverecommender_Updating_1m954",
        NoRecommendationsMessage:
          "interactiverecommender_NoRecommendationsMessage_1Ps6j",
        RecommendationOptions:
          "interactiverecommender_RecommendationOptions_2F61j",
        Row: "interactiverecommender_Row_1sYIz",
        SecondRow: "interactiverecommender_SecondRow_K-rzA",
        OptionCheckbox: "interactiverecommender_OptionCheckbox_2Cb6n",
        Checkbox: "interactiverecommender_Checkbox_29uP5",
        WishlistCheckbox: "interactiverecommender_WishlistCheckbox_1cnxU",
        SaveUserSettingsButton:
          "interactiverecommender_SaveUserSettingsButton_1VRgd",
        OptionSlider: "interactiverecommender_OptionSlider_26ek6",
        Labels: "interactiverecommender_Labels_22UxF",
        Min: "interactiverecommender_Min_1uiM2",
        Max: "interactiverecommender_Max_17wCM",
        OptionalLabel: "interactiverecommender_OptionalLabel_1JIe5",
        OptionDropdown: "interactiverecommender_OptionDropdown_1dKx5",
        Label: "interactiverecommender_Label_XPFnC",
        OptionTagList: "interactiverecommender_OptionTagList_uNxeG",
        SelectedTag: "interactiverecommender_SelectedTag_2uInW",
        Close: "interactiverecommender_Close_2bZrr",
        RecommendationEntry: "interactiverecommender_RecommendationEntry_3opuX",
        BottomEntrySection: "interactiverecommender_BottomEntrySection_2U08C",
        WishlistSection: "interactiverecommender_WishlistSection_dS7Rz",
        Hidden: "interactiverecommender_Hidden_2teee",
        TopEntrySection: "interactiverecommender_TopEntrySection_1IvHp",
        LeftSection: "interactiverecommender_LeftSection_1shxg",
        Video: "interactiverecommender_Video_3oNv9",
        Revealed: "interactiverecommender_Revealed_3aiFy",
        UnMute: "interactiverecommender_UnMute_21t3_",
        RightSection: "interactiverecommender_RightSection_27p3s",
        CenterSection: "interactiverecommender_CenterSection_M9CWJ",
        CenterOption: "interactiverecommender_CenterOption_3mXMY",
        Name: "interactiverecommender_Name_2FQXD",
        Released: "interactiverecommender_Released_3EvdK",
        BarContainer: "interactiverecommender_BarContainer_3qWin",
        Bar: "interactiverecommender_Bar_16q7Q",
        Score: "interactiverecommender_Score_17yr_",
        Tags: "interactiverecommender_Tags_3KlI0",
        Tag: "interactiverecommender_Tag_1rNtz",
        Hovered: "interactiverecommender_Hovered_3b9wG",
        Wishlisted: "interactiverecommender_Wishlisted_2uh0O",
        PurchaseSection: "interactiverecommender_PurchaseSection_mjTZM",
        PurchaseBG: "interactiverecommender_PurchaseBG_2UHKw",
        Price: "interactiverecommender_Price_18mm0",
        WishlistFlag: "interactiverecommender_WishlistFlag_2TuuQ",
        SelectionBox: "interactiverecommender_SelectionBox_2W7pR",
        SuggestionInput: "interactiverecommender_SuggestionInput_3OdNp",
        SuggestionContainerOpen:
          "interactiverecommender_SuggestionContainerOpen_2NTkL",
        SuggestionsList: "interactiverecommender_SuggestionsList_2zgal",
        OptionSuggestion: "interactiverecommender_OptionSuggestion_3VKY5",
      };
    },
    49633: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => l });
      var a = i(33940),
        n = i(89526),
        s = i(45437),
        o = i(74802),
        r = i(4306);
      class l extends n.Component {
        OnEnter() {
          s.E.AddImpression(this.props.appID, this.props.snr);
        }
        render() {
          return n.createElement(
            o.h,
            { onEnter: this.OnEnter },
            this.props.children,
          );
        }
      }
      (0, a.gn)([r.ak], l.prototype, "OnEnter", null);
    },
    45437: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => c });
      var a = i(33940),
        n = i(54671),
        s = i(32765),
        o = i(87361),
        r = i(37377);
      class l {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let i = !1;
          n.jg.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (i = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (i = !0)),
              i &&
                (this.m_rgImpressionsToAdd.push(`${e}@${t}`),
                this.UpdateCookie()))
            : "dev" === s.De.WEB_UNIVERSE &&
              console.log("Cookie Prefs: Not allowing App Impressions");
        }
        UpdateCookie() {
          const e = [
            (0, o.bG)("app_impressions") || "",
            ...this.m_rgImpressionsToAdd,
          ].join("|");
          this.m_rgImpressionsToAdd = [];
          encodeURIComponent(e).length <= 3200 &&
            (0, o.I1)("app_impressions", e);
        }
      }
      (0, a.gn)([(0, r.D)(1e3)], l.prototype, "UpdateCookie", null);
      const c = new l();
      window.g_ImpressionTracker = c;
    },
    42591: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => O });
      var a,
        n = i(33940),
        s = i(32765),
        o = i(88464),
        r = i(50265),
        l = i(89526),
        c = i(49633),
        d = i(701),
        m = i(19304),
        _ = i(14826),
        p = i(4306),
        u = i(76603),
        g = i(80292),
        h = i.n(g),
        E = i(52868),
        S = i.n(E);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(a || (a = {}));
      class v {
        constructor() {
          (this.eState = a.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, i) {
          const n = this.eState == a.Pending || this.eState == a.Rerequest;
          return (
            this.isExpired() &&
              !n &&
              ((this.eState = a.Pending),
              t()
                .then((n) => {
                  if (this.eState == a.Rerequest)
                    return this.expireData(), void this.getData(e, t, i);
                  (this.data = i ? i(n) : n),
                    n
                      ? (this.delayNewData(e), (this.eState = a.Valid))
                      : (this.eState = a.Failed);
                })
                .catch((e) => {
                  (this.data = i(void 0)), (this.eState = a.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = a.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = a.Pending;
        }
        isDataPending() {
          return this.eState == a.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = a.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == a.Pending && (this.eState = a.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, n.gn)([r.LO], v.prototype, "data", void 0),
        (0, n.gn)([r.LO], v.prototype, "nExpirationTime", void 0);
      (0, n.gn)(
        [r.LO],
        class {
          constructor() {
            this.m_mapKeyToDataWrapper = new Map();
          }
          getAsyncDataWrapper(e) {
            let t;
            return (
              this.m_mapKeyToDataWrapper.has(e)
                ? (t = this.m_mapKeyToDataWrapper.get(e))
                : ((t = new v()), this.m_mapKeyToDataWrapper.set(e, t)),
              t
            );
          }
          clearKey(e) {
            this.m_mapKeyToDataWrapper.has(e) &&
              this.m_mapKeyToDataWrapper.get(e).clearData(),
              this.m_mapKeyToDataWrapper.delete(e);
          }
          getAllElements() {
            return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
              e.getCachedData(),
            );
          }
          getAllElementsAndKeys() {
            let e = [],
              t = this.m_mapKeyToDataWrapper.entries(),
              i = t.next();
            for (; !i.done; )
              e.push({ key: i.value[0], data: i.value[1].getCachedData() }),
                (i = t.next());
            return e;
          }
        }.prototype,
        "m_mapKeyToDataWrapper",
        void 0,
      );
      let T = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        BASE_URL: "",
        COMMUNITY_BASE_URL: "",
        STORE_BASE_URL: "",
        RELATIVE_URL: "",
        IMG_URL: "",
        IMG_URL_BASE: "",
        CDN_URL: "",
        RENDER_TIMESTAMP: 0,
        EXPLORE_URL: "",
        ACCOUNT_ID: 0,
        STEAM_ID: "",
        SESSION_ID: "",
        LOGIN_REDIRECT: "",
        AVATAR_URL: "",
        PERSONA_NAME: "",
        LINK_PARAM: "",
        NUM_POPULARITY_STEPS: 0,
        NUM_RECENCY_STEPS: 0,
        MAX_PLAYED_GAMES: 0,
        RESET_OPTIONS: !1,
        INCLUDE_PLAYED: !1,
        ALGORITHM: 0,
        REINFERENCE: !1,
        MODEL_VERSION: 0,
        PERSISTENT_IGNORE: !1,
        DEFAULT_RECENCY_SLIDER: 0,
        DEFAULT_POPULARITY_SLIDER: 0,
        DEFAULT_INCLUDED_TAGS: [],
        DEFAULT_EXCLUDED_TAGS: [],
        DEFAULT_IGNORED_PLAYED_APPS: [],
        EXCLUDE_WISHLIST: !1,
        USE_MICROTRAILERS: !1,
        USE_NEW_VERSION: !1,
      };
      var R;
      !(function (e) {
        (e[(e.ClickThrough = 1)] = "ClickThrough"),
          (e[(e.AddToWishlist = 2)] = "AddToWishlist"),
          (e[(e.AddToCart = 3)] = "AddToCart");
      })(R || (R = {}));
      class y {
        constructor() {
          (this.m_rgFilterTags = []),
            (this.m_rgExcludeTags = []),
            (this.m_rgSavedFilterTags = []),
            (this.m_rgSavedExcludeTags = []),
            (this.m_mapAppDetailsCache = new Map()),
            (this.m_ResultDataCache = new v()),
            (this.m_InputAppsCache = new v()),
            (this.m_TagsCache = new v()),
            (this.m_TagNameMap = new Map()),
            (this.m_fPopularityValue = window.history.state
              ? window.history.state.popularity
              : 0.25),
            (this.m_fRecencyValue = window.history.state
              ? window.history.state.recency
              : 0),
            (this.m_bExcludeWishlisted =
              !!window.history.state && window.history.state.excludewishlisted),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bStateUpdated = !1),
            (this.m_bShouldMute = !0),
            (this.m_bIgnoredEdited = !1),
            (this.m_bUseMicrotrailers = !1),
            setInterval(() => {
              this.m_bStateUpdated &&
                (window.history.replaceState(
                  {
                    popularity: this.m_fPopularityValue,
                    recency: this.m_fRecencyValue,
                    excludewishlisted: this.m_bExcludeWishlisted,
                  },
                  "",
                ),
                (this.m_bStateUpdated = !1));
            }, 1e3),
            setInterval(() => {
              (this.m_fPopularityValue == this.m_fQueuedPopularityValue &&
                this.m_fQueuedRecencyValue == this.m_fRecencyValue) ||
                ((this.m_fPopularityValue = this.m_fQueuedPopularityValue),
                (this.m_fRecencyValue = this.m_fQueuedRecencyValue),
                (this.m_bStateUpdated = !0));
            }, 400);
        }
        Init() {
          (this.m_fPopularityValue = T.DEFAULT_POPULARITY_SLIDER),
            (this.m_fRecencyValue = T.DEFAULT_RECENCY_SLIDER),
            (this.m_rgSavedExcludeTags = [...T.DEFAULT_EXCLUDED_TAGS]),
            (this.m_rgSavedFilterTags = [...T.DEFAULT_INCLUDED_TAGS]),
            (this.m_rgExcludeTags = [...this.m_rgSavedExcludeTags]),
            (this.m_rgFilterTags = [...this.m_rgSavedFilterTags]),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bExcludeWishlisted = !1),
            (this.m_bStateUpdated = !0),
            (this.m_bExcludeWishlisted = T.EXCLUDE_WISHLIST),
            (this.m_bUseMicrotrailers = T.USE_MICROTRAILERS);
        }
        getDetails(e) {
          return (
            this.m_mapAppDetailsCache.has(e) ||
              this.m_mapAppDetailsCache.set(e, new v()),
            this.m_mapAppDetailsCache.get(e).getData(
              60,
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  return yield S().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/details?appid=${e}&sessionid=${T.SESSION_ID}`,
                  );
                }),
              (e) => e.data,
            )
          );
        }
        getResults(e, t, i, a, s) {
          const o = e ? "1" : "0",
            r = t ? `${t}` : "0",
            l = i ? "1" : "0",
            c = a ? `${a}` : "0";
          let d = "";
          const m = this.getInputApps();
          if (!m) return;
          let _ = [];
          return (
            Object.keys(m).map((e) => {
              (m[e].i || m[e].ip) && _.push(m[e].a);
            }),
            _.length > 0 && (d = "&ignored=" + _.join()),
            this.m_ResultDataCache.getData(
              9999999,
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  return yield S().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/results?sessionid=${
                      T.SESSION_ID
                    }&steamid=${
                      T.STEAM_ID
                    }&include_played=${o}&algorithm=${r}&reinference=${l}&model_version=${c}${d}&newrec=${
                      s ? 1 : 0
                    }`,
                  );
                }),
              (e) => (
                s &&
                  e.data.recommendations.request_results.sort((e, t) =>
                    e.project_id < t.project_id
                      ? -1
                      : e.project_id > t.project_id
                      ? 1
                      : e.difference_multiplier_factor <
                        t.difference_multiplier_factor
                      ? -1
                      : 1,
                  ),
                e.data
              ),
            )
          );
        }
        areResultsExpired() {
          return this.m_ResultDataCache.isExpired();
        }
        getRecommendations(e) {
          const t = N.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION,
            e,
          );
          return t ? t.recommendations : void 0;
        }
        getInputApps() {
          return this.m_InputAppsCache.getData(
            9999999,
            () =>
              (0, n.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/inputs?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}`,
                );
              }),
            (e) => e.data,
          );
        }
        getAppInfo(e) {
          const t = N.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION,
            e,
          );
          return t ? t.app_info : void 0;
        }
        getTags() {
          return this.m_TagsCache.getData(
            9999999,
            () =>
              (0, n.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/tags?sessionid=${T.SESSION_ID}`,
                );
              }),
            (e) => {
              this.m_TagNameMap.clear();
              for (const t of e.data) this.m_TagNameMap.set(t.tagid, t.name);
              return e.data;
            },
          );
        }
        getTagName(e) {
          return this.getTags(), this.m_TagNameMap.get(e);
        }
        getTagHeight() {
          return Math.max(
            this.m_rgFilterTags.length,
            this.m_rgExcludeTags.length,
          );
        }
        onPopularityChanged(e) {
          this.m_fQueuedPopularityValue = Number(e.target.value);
        }
        onRecencyChanged(e) {
          this.m_fQueuedRecencyValue = Number(e.target.value);
        }
        onTagFilterAdd(e) {
          this.m_rgFilterTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagFilterRemove(e) {
          for (let t = 0; t < this.m_rgFilterTags.length; t++)
            if (this.m_rgFilterTags[t] == e) {
              this.m_rgFilterTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        onTagExcludeAdd(e) {
          this.m_rgExcludeTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagExcludeRemove(e) {
          for (let t = 0; t < this.m_rgExcludeTags.length; t++)
            if (this.m_rgExcludeTags[t] == e) {
              this.m_rgExcludeTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        doTagsPassFilter(e) {
          for (const t of this.m_rgFilterTags)
            if (-1 == e.indexOf(t)) return !1;
          return !0;
        }
        doTagsFailExclusion(e) {
          for (const t of this.m_rgExcludeTags)
            if (-1 != e.indexOf(t)) return !0;
          return !1;
        }
        onExcludeWishlistedToggled(e) {
          (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
            (this.m_bStateUpdated = !0);
        }
        onSaveUserSettings(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = [];
            const t = this.getInputApps();
            for (let i of t) (i.i || i.ip) && e.push(i.a);
            if (
              this.m_fRecencyValue == T.DEFAULT_RECENCY_SLIDER &&
              this.m_fPopularityValue == T.DEFAULT_POPULARITY_SLIDER &&
              this.m_rgFilterTags.slice().sort().join(",") ===
                this.m_rgSavedFilterTags.sort().join(",") &&
              this.m_rgExcludeTags.slice().sort().join(",") ===
                this.m_rgSavedExcludeTags.sort().join(",") &&
              e.slice().sort().join(",") ===
                T.DEFAULT_IGNORED_PLAYED_APPS.sort().join(",") &&
              this.m_bExcludeWishlisted == T.EXCLUDE_WISHLIST
            );
            else {
              let t = {
                session_id: T.SESSION_ID,
                recency_position: this.m_fRecencyValue,
                popularity_position: this.m_fPopularityValue,
                included_tags: this.m_rgFilterTags,
                excluded_tags: this.m_rgExcludeTags,
                ignored_played_apps: e,
                exclude_wishlist: this.m_bExcludeWishlisted,
              };
              (T.DEFAULT_RECENCY_SLIDER = this.m_fRecencyValue),
                (T.DEFAULT_POPULARITY_SLIDER = this.m_fPopularityValue),
                (T.DEFAULT_INCLUDED_TAGS = [...this.m_rgFilterTags]),
                (T.DEFAULT_EXCLUDED_TAGS = [...this.m_rgExcludeTags]),
                (this.m_rgSavedFilterTags = [...this.m_rgFilterTags]),
                (this.m_rgSavedExcludeTags = [...this.m_rgExcludeTags]),
                (T.DEFAULT_IGNORED_PLAYED_APPS = [...e]),
                (T.EXCLUDE_WISHLIST = this.m_bExcludeWishlisted),
                yield S().post(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/savesettings`,
                  t,
                );
            }
          });
        }
        onToggleIgnore(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = this.getInputApps();
            for (let i of t)
              if (i.a == e) {
                i.i || i.ip ? ((i.i = !1), (i.ip = !1)) : (i.ip = !0);
                break;
              }
            this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !0);
          });
        }
        onUpdateWithIgnored() {
          this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
        }
        onAppClicked(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let i = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: R.ClickThrough,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield S().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, i);
          });
        }
        onAddToWishlist(e, t, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            N.getAppInfo(i)[e].w = !0;
            let a = { sessionid: T.SESSION_ID, appid: e };
            const n = yield S().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/wishlist?snr=${T.LINK_PARAM}`,
              a,
            );
            let s = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: R.AddToWishlist,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            return (
              yield S().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, s),
              n
            );
          });
        }
        onGoToWishlist() {
          window.location.href = `${T.COMMUNITY_BASE_URL}profiles/${T.STEAM_ID}/wishlist`;
        }
        onAddToCart(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let i = { sessionid: T.SESSION_ID, appid: e };
            yield S().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/cart?snr=${T.LINK_PARAM}`,
              i,
            );
            let a = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: R.AddToCart,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield S().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, a),
              (window.location.href = `${s.De.STORE_BASE_URL}cart`);
          });
        }
        onMuteClicked() {
          this.m_bShouldMute = !0;
        }
        onUnMuteClicked() {
          this.m_bShouldMute = !1;
        }
        shouldMute() {
          return this.m_bShouldMute;
        }
        shouldUseMicrotrailers() {
          return this.m_bUseMicrotrailers;
        }
      }
      (0, n.gn)([r.LO], y.prototype, "m_fPopularityValue", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_fRecencyValue", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_rgFilterTags", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_rgExcludeTags", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_fQueuedPopularityValue", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_fQueuedRecencyValue", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_bExcludeWishlisted", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_bShouldMute", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_bUseMicrotrailers", void 0),
        (0, n.gn)([r.LO], y.prototype, "m_bIgnoredEdited", void 0),
        (0, n.gn)([p.ak], y.prototype, "getTagHeight", null),
        (0, n.gn)([p.ak], y.prototype, "onPopularityChanged", null),
        (0, n.gn)([p.ak], y.prototype, "onRecencyChanged", null),
        (0, n.gn)([p.ak], y.prototype, "onTagFilterAdd", null),
        (0, n.gn)([p.ak], y.prototype, "onTagFilterRemove", null),
        (0, n.gn)([p.ak], y.prototype, "onTagExcludeAdd", null),
        (0, n.gn)([p.ak], y.prototype, "onTagExcludeRemove", null),
        (0, n.gn)([p.ak], y.prototype, "doTagsPassFilter", null),
        (0, n.gn)([p.ak], y.prototype, "doTagsFailExclusion", null),
        (0, n.gn)([p.ak], y.prototype, "onExcludeWishlistedToggled", null),
        (0, n.gn)([p.ak], y.prototype, "onSaveUserSettings", null),
        (0, n.gn)([p.ak], y.prototype, "onToggleIgnore", null),
        (0, n.gn)([p.ak], y.prototype, "onUpdateWithIgnored", null),
        (0, n.gn)([p.ak], y.prototype, "onAppClicked", null),
        (0, n.gn)([p.ak], y.prototype, "onAddToWishlist", null),
        (0, n.gn)([p.ak], y.prototype, "onGoToWishlist", null),
        (0, n.gn)([p.ak], y.prototype, "onAddToCart", null),
        (0, n.gn)([p.ak], y.prototype, "onMuteClicked", null),
        (0, n.gn)([p.ak], y.prototype, "onUnMuteClicked", null),
        (0, n.gn)([p.ak], y.prototype, "shouldMute", null),
        (0, n.gn)([p.ak], y.prototype, "shouldUseMicrotrailers", null);
      const N = new y();
      window.g_InteractiveRecommender = N;
      var f = i(32905);
      !(function () {
        let e = (0, s.kQ)("ir_config", "application_config");
        e && (Object.assign(T, e), N.Init());
      })();
      const I = ({ accountID: e }) => {
          const t = N.getInputApps(),
            i = Object.keys(t).length;
          let a = 0;
          return (
            Object.keys(t).map((e) => {
              a += t[e].p;
            }),
            l.createElement(
              "div",
              { className: u.IdentityBlock },
              l.createElement("img", {
                className: u.Avatar,
                src: T.AVATAR_URL,
              }),
              l.createElement(
                "div",
                { className: u.PersonalInfo },
                l.createElement(
                  "div",
                  { className: u.Persona },
                  T.PERSONA_NAME,
                ),
                l.createElement(
                  "div",
                  { className: u.GameCount },
                  (0, _.Xx)("#PlaytimeList_RecentGames", i),
                ),
                l.createElement(
                  "div",
                  { className: u.TotalTime },
                  (0, _.Xx)("#PlaytimeList_HoursTotal", a),
                ),
              ),
            )
          );
        },
        L = ({ appID: e, name: t, hours: i, lastPlayed: a, ignored: n }) => {
          const s = `${T.CDN_URL}apps/${e}/header.jpg`,
            o = Date.now() / 1e3 - a;
          let r = "",
            c = "";
          return (
            a <= 86400
              ? (c = (0, _.Xx)("#PlaytimeList_LastPlayedMax"))
              : o > 31449600
              ? ((r = (0, _.vX)(a)),
                (c = (0, _.Xx)("#PlaytimeList_LastPlayed", r)))
              : ((r = (0, _.yW)(o)),
                (c = (0, _.Xx)("#PlaytimeList_LastPlayed", r))),
            l.createElement(
              "div",
              { className: (0, m.Z)(u.PlayedGame, n && u.Ignored) },
              l.createElement(
                "a",
                { href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}` },
                l.createElement("img", { className: u.Logo, src: s }),
              ),
              l.createElement(
                "div",
                { className: u.PlaytimeInfo },
                l.createElement(
                  "div",
                  { className: u.HoursPlayed },
                  (0, _.Xx)("#PlaytimeList_Hours", i),
                ),
                l.createElement("div", { className: u.Title }, t),
                l.createElement("div", { className: u.LastPlayed }, c),
                l.createElement(
                  "div",
                  {
                    className: u.IgnoreToggle,
                    onClick: () => N.onToggleIgnore(e),
                  },
                  (0, _.Xx)(
                    n ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore",
                  ),
                ),
              ),
            )
          );
        };
      let C = class extends l.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = N.getInputApps();
          let t = [];
          if (!e)
            return l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, _.Xx)("#PlaytimeList_Header"),
              ),
              l.createElement("div", { className: u.Loading }),
            );
          N.getAppInfo(T.USE_NEW_VERSION);
          const i = e.slice().sort((e, t) => t.l - e.l);
          return (
            Object.keys(i).map((e) => {
              const a = i[e];
              t.push(
                l.createElement(L, {
                  key: "PlayedGame_" + a.a,
                  appID: a.a,
                  name: a.t,
                  hours: a.p,
                  lastPlayed: a.l,
                  ignored: a.i || a.ip,
                }),
              );
            }),
            l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, _.Xx)("#PlaytimeList_Header"),
              ),
              l.createElement(I, { accountID: this.props.accountID }),
              l.createElement("div", { className: u.List }, t),
            )
          );
        }
      };
      C = (0, n.gn)([o.Pi], C);
      const A = ({
          titleLabel: e,
          minLabel: t,
          maxLabel: i,
          minValue: a,
          maxValue: n,
          value: s,
          onChange: o,
          sliderLabels: r,
        }) => {
          const c = r
              ? Math.round((r.length - 1) * ((s - a) / (n - a)))
              : void 0,
            d = r ? r[c] : "";
          return l.createElement(
            "div",
            { className: u.OptionSlider },
            l.createElement("div", { className: u.Title }, e),
            l.createElement(
              "div",
              { className: u.Labels },
              l.createElement("div", { className: u.Min }, t),
              l.createElement("div", { className: u.Max }, i),
            ),
            l.createElement("input", {
              type: "range",
              min: a,
              max: n,
              step: (n - a) / 100,
              value: s,
              onChange: o,
            }),
            l.createElement("div", { className: u.OptionalLabel }, d),
          );
        },
        x = ({ className: e, titleLabel: t, checked: i, onChange: a }) =>
          l.createElement(
            "label",
            { className: (0, m.Z)(u.OptionCheckbox, e && e) },
            l.createElement("input", {
              type: "checkbox",
              className: u.Checkbox,
              checked: i,
              onChange: a,
            }),
            t,
          );
      let D = class extends l.Component {
        constructor(e) {
          super(e),
            (this.selectedtags = []),
            (this.rgTags = []),
            (this.selectedtags = [...e.selectedtags]),
            (this.state = { value: "", suggestions: [] });
        }
        componentDidMount() {
          const e = N.getTags();
          if (e)
            for (const t of e)
              this.rgTags.push({ id: parseInt(t.tagid), name: t.name });
        }
        onFetchRequested(e) {
          const t = e.value.trim().toLowerCase(),
            i = t.length,
            a =
              0 === i
                ? this.props.tagoptions.slice(0, 10)
                : this.props.tagoptions.filter(
                    (e) => e.name.toLowerCase().slice(0, i) === t,
                  );
          this.setState({ suggestions: a });
        }
        onClearRequested() {}
        onChange(e, t) {
          this.setState({ value: t.newValue });
        }
        onKeyDown(e) {
          if (13 == e.keyCode)
            for (const t of this.props.tagoptions)
              if (t.name.toLowerCase() == this.state.value.toLowerCase()) {
                const i = {
                  suggestion: { id: t.id, name: t.name },
                  suggestionValue: t.name,
                  suggestionIndex: 0,
                  sectionIndex: 0,
                  method: "enter",
                };
                this.onSuggestionSelected(e, i);
                break;
              }
        }
        shouldRenderSuggestions(e) {
          return !0;
        }
        onSuggestionSelected(e, t) {
          for (const e of this.selectedtags) if (e == t.suggestion.id) return;
          this.selectedtags.push(t.suggestion.id),
            this.props.onAddTag(t.suggestion.id);
        }
        onRemoveSelectedTag(e) {
          for (let t = 0; t < this.selectedtags.length; t++)
            if (this.selectedtags[t] == e) {
              this.props.onRemoveTag(this.selectedtags[t]),
                this.selectedtags.splice(t, 1);
              break;
            }
        }
        render() {
          const e = {
            placeholder: (0, _.Xx)("#TagSelect"),
            value: this.state.value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown,
          };
          let t = [];
          for (const e of this.selectedtags) {
            let i = N.m_TagNameMap.get(e);
            t.push(
              l.createElement(
                "div",
                {
                  key: e,
                  className: u.SelectedTag,
                  onClick: (t) => this.onRemoveSelectedTag(e),
                },
                l.createElement("div", null, i),
                l.createElement("div", { className: u.Close }, "X"),
              ),
            );
          }
          return l.createElement(
            "div",
            { className: u.OptionTagList },
            l.createElement("div", { className: u.Label }, this.props.title),
            l.createElement(h(), {
              suggestions: this.state.suggestions,
              onSuggestionsFetchRequested: this.onFetchRequested,
              onSuggestionsClearRequested: this.onClearRequested,
              onSuggestionSelected: this.onSuggestionSelected,
              shouldRenderSuggestions: this.shouldRenderSuggestions,
              getSuggestionValue: (e) => e.name,
              renderSuggestion: (e) => l.createElement("div", null, e.name),
              inputProps: e,
              theme: {
                input: u.SuggestionInput,
                suggestion: u.OptionSuggestion,
                suggestionsList: u.SuggestionsList,
                suggestionsContainerOpen: u.SuggestionContainerOpen,
              },
            }),
            t,
          );
        }
      };
      (0, n.gn)([r.LO], D.prototype, "selectedtags", void 0),
        (0, n.gn)([p.ak], D.prototype, "onFetchRequested", null),
        (0, n.gn)([p.ak], D.prototype, "onClearRequested", null),
        (0, n.gn)([p.ak], D.prototype, "onChange", null),
        (0, n.gn)([p.ak], D.prototype, "onKeyDown", null),
        (0, n.gn)([p.ak], D.prototype, "shouldRenderSuggestions", null),
        (0, n.gn)([p.ak], D.prototype, "onSuggestionSelected", null),
        (0, n.gn)([p.ak], D.prototype, "onRemoveSelectedTag", null),
        (D = (0, n.gn)([o.Pi], D));
      const P = (0, o.Pi)(() => {
        const e = N.getTags();
        let t = [];
        if (e)
          for (const i of e) t.push({ id: parseInt(i.tagid), name: i.name });
        const i = [
          (0, _.Xx)("#FilterAge_120"),
          (0, _.Xx)("#FilterAge_60"),
          (0, _.Xx)("#FilterAge_36"),
          (0, _.Xx)("#FilterAge_24"),
          (0, _.Xx)("#FilterAge_12"),
          (0, _.Xx)("#FilterAge_6"),
        ];
        let a = N.m_rgSavedExcludeTags,
          n = N.m_rgSavedFilterTags;
        return l.createElement(
          "div",
          { className: u.RecommendationOptions },
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.FirstRow) },
            l.createElement(A, {
              minLabel: (0, _.Xx)("#Popularity_Popular"),
              titleLabel: (0, _.Xx)("#Popularity_Title"),
              maxLabel: (0, _.Xx)("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: N.m_fQueuedPopularityValue,
              onChange: N.onPopularityChanged,
            }),
            l.createElement(A, {
              minLabel: (0, _.Xx)("#Recency_Older"),
              titleLabel: (0, _.Xx)("#Recency_Title"),
              maxLabel: (0, _.Xx)("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: N.m_fQueuedRecencyValue,
              onChange: N.onRecencyChanged,
              sliderLabels: i,
            }),
          ),
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.SecondRow) },
            l.createElement(D, {
              title: (0, _.Xx)("#TagFilterMultiple_Title"),
              tagoptions: t,
              selectedtags: n,
              key: "Filter" + n.toString(),
              onAddTag: N.onTagFilterAdd,
              onRemoveTag: N.onTagFilterRemove,
            }),
            l.createElement(D, {
              title: (0, _.Xx)("#TagExcludeMultiple_Title"),
              tagoptions: t,
              selectedtags: a,
              key: "Exclude" + a.toString(),
              onAddTag: N.onTagExcludeAdd,
              onRemoveTag: N.onTagExcludeRemove,
            }),
            l.createElement(x, {
              className: u.WishlistCheckbox,
              titleLabel: (0, _.Xx)("#ExcludeWishlisted"),
              checked: N.m_bExcludeWishlisted,
              onChange: N.onExcludeWishlistedToggled,
            }),
            l.createElement(
              "button",
              {
                className: u.SaveUserSettingsButton,
                onClick: N.onSaveUserSettings,
                title: (0, _.Xx)("#SaveUserSettingsTooltip"),
              },
              (0, _.Xx)("#SaveUserSettings"),
            ),
          ),
        );
      });
      let U = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_videoRef = l.createRef()),
            (this.state = {
              hovered: !1,
              wishlisted: N.getAppInfo(T.USE_NEW_VERSION)[e.appID].w,
            });
        }
        componentDidMount() {
          this.m_videoRef.current.defaultMuted = !0;
        }
        componentDidUpdate() {
          if (
            this.state.hovered &&
            this.m_videoRef &&
            this.m_videoRef.current &&
            0 == this.m_videoRef.current.currentTime
          ) {
            const e = this.m_videoRef.current.play();
            e &&
              e.then(
                () => {},
                () => {},
              );
          }
        }
        OnHover() {
          this.setState({ hovered: !0 });
        }
        OnUnHover() {
          this.setState({ hovered: !1 }),
            this.m_videoRef &&
              this.m_videoRef.current &&
              ((this.m_videoRef.current.currentTime = 0),
              this.m_videoRef.current.pause());
        }
        onMuteToggle(e) {
          N.shouldMute()
            ? (N.onUnMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !1))
            : (N.onMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !0)),
            e.preventDefault(),
            e.stopPropagation();
        }
        onAddToWishlist(e) {
          N.onAddToWishlist(
            this.props.appID,
            this.props.rank,
            T.USE_NEW_VERSION,
          ),
            this.setState({ wishlisted: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        onGoToWishlist(e) {
          N.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
        }
        onAddToCart(e) {
          N.onAddToCart(this.props.appID, this.props.rank),
            e.preventDefault(),
            e.stopPropagation();
        }
        render() {
          const { appID: e, score: t, rank: i, width: a } = this.props,
            n =
              "https://steamcdn-a.akamaihd.net/steam/apps/" + e + "/header.jpg",
            s = N.getAppInfo(T.USE_NEW_VERSION)[e];
          if (!s) return l.createElement("div", null);
          const o = s.n,
            r =
              s.r > 0
                ? (0, _.Xx)("#Recommendation_ReleasedOn", (0, _.vX)(s.r))
                : "";
          let p = [];
          if (s.t) {
            let t = 0;
            for (const i of s.t)
              if (
                (p.push(
                  l.createElement(
                    "div",
                    { key: `${e}_${i}`, className: u.Tag },
                    N.getTagName(i),
                  ),
                ),
                t++,
                5 == t)
              )
                break;
          }
          const g = parseInt(u.smallentrywidth),
            h = parseInt(u.optionswrapwidth);
          let E = 112,
            S = !0;
          a < g ? ((E = 66), (S = !1)) : a < h && ((E = 87), (S = !1));
          const v = S && this.state.hovered,
            R = Math.min(Number(t) / (T.USE_NEW_VERSION ? 100 : 10), 1e3);
          Math.max(1, t);
          let y = !1,
            f = !1,
            I = !0,
            L = "",
            C = "",
            A = "",
            x = "";
          let D = "",
            P = !1,
            U = !0;
          if (v) {
            const e = N.getDetails(this.props.appID);
            e &&
              ((y = !0),
              (f = e.discount_pct > 0),
              (I = "0" == e.discount_price),
              "probably" ==
              document
                .createElement("video")
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                ? N.shouldUseMicrotrailers() && e.microtrailer_webm
                  ? ((D = e.microtrailer_webm), (P = !0), (U = !1))
                  : (D = e.video_webm)
                : N.shouldUseMicrotrailers() && e.microtrailer_mp4
                ? ((D = e.microtrailer_mp4), (P = !0), (U = !1))
                : (D = e.video_mp4),
              (L = `-${e.discount_pct}%`),
              (C = e.base_price),
              (A = I ? (0, _.Xx)("#FreeToPlay") : e.discount_price),
              (x = e.description));
          }
          const M = D && D.length > 0;
          return l.createElement(
            c.Z,
            { appID: e, snr: T.LINK_PARAM },
            l.createElement(
              "a",
              {
                href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}`,
                onClick: () => N.onAppClicked(e, i),
                className: (0, m.Z)(
                  u.RecommendationEntry,
                  "ds_flagged",
                  "ds_wishlist",
                  i > 30 && u.Hidden,
                  v && u.Hovered,
                ),
                style: { top: Math.min(31, i) * E },
                onMouseEnter: this.OnHover,
                onMouseLeave: this.OnUnHover,
              },
              l.createElement(
                "div",
                { className: u.TopEntrySection },
                l.createElement(
                  "div",
                  { className: u.LeftSection },
                  l.createElement("img", {
                    className: (0, m.Z)(u.Logo, (!M || !v) && u.Revealed),
                    src: n,
                  }),
                  l.createElement("video", {
                    ref: this.m_videoRef,
                    className: (0, m.Z)(
                      "highlight_player_item",
                      "highlight_movie",
                      u.Video,
                      M && v && u.Revealed,
                    ),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: U && N.shouldMute(),
                    src: D,
                    loop: P,
                  }),
                  U &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(u.UnMute, M && u.Revealed),
                        onClick: (e) => this.onMuteToggle(e),
                      },
                      l.createElement(d.ffh, { muted: N.shouldMute() }),
                    ),
                  this.state.wishlisted &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          "ds_flag",
                          "ds_wishlist_flag",
                          u.WishlistFlag,
                        ),
                      },
                      (0, _.Xx)("#Recommendation_OnWishlist") + "  ",
                    ),
                ),
                l.createElement(
                  "div",
                  { className: u.RightSection },
                  l.createElement("div", { className: u.Name }, o),
                  l.createElement(
                    "div",
                    { className: u.CenterSection },
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterDefault,
                          v && u.Hidden,
                        ),
                      },
                      l.createElement("div", { className: u.Released }, r),
                      l.createElement(
                        "div",
                        { className: u.BarContainer },
                        l.createElement("div", {
                          className: u.Bar,
                          style: { width: `${R}%` },
                        }),
                      ),
                      l.createElement("div", { className: u.Tags }, p),
                    ),
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterHovered,
                          !v && u.Hidden,
                        ),
                      },
                      x,
                    ),
                  ),
                  y &&
                    l.createElement(
                      "div",
                      { className: u.BottomEntrySection },
                      l.createElement(
                        "div",
                        {
                          className: (0, m.Z)(
                            "game_purchase_action",
                            u.PurchaseSection,
                          ),
                        },
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "game_purchase_action_bg",
                              u.PurchaseBG,
                            ),
                          },
                          f &&
                            l.createElement(
                              "div",
                              {
                                className:
                                  "discount_block game_purchase_discount",
                              },
                              l.createElement(
                                "div",
                                { className: "discount_pct" },
                                L,
                              ),
                              l.createElement(
                                "div",
                                { className: "discount_prices" },
                                l.createElement(
                                  "div",
                                  { className: "discount_original_price" },
                                  C,
                                ),
                                l.createElement(
                                  "div",
                                  { className: "discount_final_price" },
                                  A,
                                ),
                              ),
                            ),
                          !f &&
                            l.createElement(
                              "div",
                              {
                                className: (0, m.Z)(
                                  "game_purchase_price",
                                  "price",
                                  u.Price,
                                ),
                              },
                              A,
                            ),
                          !I &&
                            l.createElement(
                              "div",
                              {
                                className: "btn_addtocart",
                                onClick: (e) => this.onAddToCart(e),
                              },
                              l.createElement(
                                "span",
                                {
                                  className:
                                    "btnv6_green_white_innerfade btn_medium",
                                },
                                l.createElement(
                                  "span",
                                  null,
                                  (0, _.Xx)("#btn_add_to_cart"),
                                ),
                              ),
                            ),
                        ),
                      ),
                      !this.state.wishlisted &&
                        !I &&
                        l.createElement(
                          "div",
                          {
                            id: "add_to_wishlist_area",
                            className: u.WishlistSection,
                            onClick: (e) => this.onAddToWishlist(e),
                          },
                          l.createElement(
                            "div",
                            { className: "btnv6_blue_hoverfade btn_medium" },
                            l.createElement(
                              "span",
                              null,
                              (0, _.Xx)("#wishlist_add_to_wishlist"),
                            ),
                          ),
                        ),
                      this.state.wishlisted &&
                        !I &&
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "btnv6_blue_hoverfade btn_medium",
                              "queue_btn_active",
                              u.Wishlisted,
                              u.WishlistSection,
                            ),
                            "data-tooltip-text": (0, _.Xx)(
                              "#OnWishlistTooltip",
                            ),
                            onClick: (e) => this.onGoToWishlist(e),
                          },
                          l.createElement(
                            "span",
                            null,
                            l.createElement("img", {
                              src: `${T.IMG_URL_BASE}/v6/ico/ico_selected.png`,
                            }),
                            "  " + (0, _.Xx)("#OnWishlist"),
                          ),
                        ),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, n.gn)([p.ak], U.prototype, "OnHover", null),
        (0, n.gn)([p.ak], U.prototype, "OnUnHover", null),
        (0, n.gn)([p.ak], U.prototype, "onMuteToggle", null),
        (0, n.gn)([p.ak], U.prototype, "onAddToWishlist", null),
        (0, n.gn)([p.ak], U.prototype, "onGoToWishlist", null),
        (0, n.gn)([p.ak], U.prototype, "onAddToCart", null),
        (U = (0, n.gn)([o.Pi], U));
      let M = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { sortedRecommendedApps: [] });
        }
        render() {
          let e = [];
          if (T.USE_NEW_VERSION) {
            const t = N.m_fRecencyValue * (T.NUM_RECENCY_STEPS - 1 - 0.001),
              i = Math.floor(t),
              a = i + 1,
              n = t - i,
              s = N.m_fPopularityValue * (T.NUM_POPULARITY_STEPS - 1 - 0.001),
              o = Math.floor(s),
              r = o + 1,
              l = s - o;
            console.log("fScaledRecency", t.toFixed(3)),
              console.log("fScaledPopularity", s.toFixed(3)),
              console.log("nRecencyMin", i),
              console.log("nRecencyMax", a),
              console.log("nPopularityMin", o),
              console.log("nPopularityMax", r),
              e.push({
                index: i * T.NUM_RECENCY_STEPS + o,
                weight: (1 - n) * (1 - l),
              }),
              e.push({
                index: a * T.NUM_RECENCY_STEPS + o,
                weight: n * (1 - l),
              }),
              e.push({
                index: i * T.NUM_RECENCY_STEPS + r,
                weight: (1 - n) * l,
              }),
              e.push({ index: a * T.NUM_RECENCY_STEPS + r, weight: n * l }),
              console.log(
                "  index: ",
                i * T.NUM_RECENCY_STEPS + o,
                "weight: ",
                (1 - n) * (1 - l),
              ),
              console.log(
                "  index: ",
                a * T.NUM_RECENCY_STEPS + o,
                "weight: ",
                n * (1 - l),
              ),
              console.log(
                "  index: ",
                i * T.NUM_RECENCY_STEPS + r,
                "weight: ",
                (1 - n) * l,
              ),
              console.log(
                "  index: ",
                a * T.NUM_RECENCY_STEPS + r,
                "weight: ",
                n * l,
              );
          } else {
            const t = N.m_fRecencyValue * (T.NUM_RECENCY_STEPS - 1 - 0.001),
              i = Math.floor(t),
              a = i + 1,
              n = 1 - (t - i),
              s = 1 - n,
              o = N.m_fPopularityValue * (T.NUM_POPULARITY_STEPS - 1 - 0.001),
              r = Math.floor(o),
              l = r + 1,
              c = 1 - (o - r),
              d = 1 - c;
            e.push({ index: r * T.NUM_RECENCY_STEPS + i, weight: c * n }),
              e.push({ index: l * T.NUM_RECENCY_STEPS + i, weight: d * n }),
              e.push({ index: r * T.NUM_RECENCY_STEPS + a, weight: c * s }),
              e.push({ index: l * T.NUM_RECENCY_STEPS + a, weight: d * s });
          }
          let t = new Map(),
            i = 0;
          const a = N.getRecommendations(T.USE_NEW_VERSION),
            n = N.getAppInfo(T.USE_NEW_VERSION);
          let s = [];
          if (a) {
            if (T.USE_NEW_VERSION)
              for (const s of e) {
                const e = a.request_results[s.index];
                for (let e = 0; e < a.request_results.length; e++)
                  console.log(
                    `[${e}] - project_id ${a.request_results[e].project_id}, dmf ${a.request_results[e].difference_multiplier_factor}`,
                  );
                if (e) {
                  console.log(
                    "Weight",
                    s.weight,
                    "index",
                    s.index,
                    "project",
                    e.project_id,
                    "dmf",
                    e.difference_multiplier_factor,
                    "peak app",
                    e.app_recommendations[0].app_id,
                  ),
                    (i = Math.max(i, e.max_weight));
                  for (const i of e.app_recommendations) {
                    const e = i.app_id;
                    if (
                      !n[e] ||
                      n[e].o ||
                      n[e].i ||
                      n[e].ti ||
                      (n[e].w && N.m_bExcludeWishlisted)
                    )
                      continue;
                    const a = (t.get(e) || 0) + i.weight * s.weight;
                    t.set(e, a);
                  }
                }
              }
            else {
              for (const s of e) {
                const e = a[s.index];
                if (((i = Math.max(i, e.score_scale)), e))
                  for (let i = 0; i < e.app_ids.length; i++) {
                    const a = e.app_ids[i];
                    if (
                      !n[a] ||
                      n[a].o ||
                      n[a].i ||
                      n[a].ti ||
                      (n[a].w && N.m_bExcludeWishlisted)
                    )
                      continue;
                    const o =
                      (t.get(a) || 0) + e.scores[i] * s.weight * e.score_scale;
                    t.set(a, o);
                  }
              }
              t.forEach((e, a) => t.set(a, e / i));
            }
            let o = [];
            t.forEach((e, t) => o.push({ appid: t, score: e })),
              (o = o.filter(
                (e) => n[e.appid].t && N.doTagsPassFilter(n[e.appid].t),
              )),
              (o = o.filter(
                (e) => n[e.appid].t && !N.doTagsFailExclusion(n[e.appid].t),
              )),
              (o = o.filter((e) => e.score > 0));
            let r = o.sort((e, t) => t.score - e.score);
            if (r.length > 0) {
              r = r.slice(0, 30);
              let e = 0;
              for (let t of r) (t.rank = e), e++;
              for (const e of r)
                s.push(
                  l.createElement(U, {
                    key: e.appid,
                    appID: e.appid,
                    score: e.score,
                    rank: e.rank,
                    width: this.props.width,
                  }),
                );
            } else
              s.push(
                l.createElement(
                  "div",
                  {
                    key: "no_recommedations_due_to_filter",
                    className: u.NoRecommendationsMessage,
                  },
                  (0, _.Xx)("#NoRecommendationsDueToFilter"),
                ),
              );
          } else
            s.push(
              l.createElement("div", {
                key: "recommendations_loading",
                className: u.RecommendationsLoading,
              }),
            );
          return l.createElement(
            "div",
            { className: u.RecommendationList },
            l.createElement(
              "div",
              { className: u.Header },
              (0, _.Xx)("#Recommendations_Header"),
            ),
            l.createElement(P, null),
            l.createElement(
              "div",
              {
                className: (0, m.Z)(
                  u.List,
                  N.areResultsExpired() && u.Updating,
                ),
              },
              s,
            ),
          );
        }
      };
      M = (0, n.gn)([o.Pi], M);
      let w = class extends l.Component {
        constructor() {
          super(...arguments), (this.state = { width: window.innerWidth });
        }
        updateDimensions() {
          this.setState({ width: window.innerWidth });
        }
        componentDidMount() {
          window.addEventListener("resize", this.updateDimensions);
        }
        ShowLoginDialog() {
          (0, f.X)();
        }
        render() {
          return s.L7.logged_in
            ? l.createElement(
                "div",
                {
                  className: u.App,
                  style: { height: 3840 + 26 * N.getTagHeight() },
                },
                l.createElement(
                  "div",
                  { className: u.Container },
                  l.createElement(
                    "div",
                    { className: u.TopSection },
                    l.createElement(
                      "div",
                      { className: u.Header },
                      (0, _.Xx)("#HeaderTitle"),
                    ),
                    l.createElement(
                      "div",
                      { className: u.Body },
                      (0, _.Xx)("#HeaderBody1"),
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: u.BottomSection },
                    l.createElement(C, { accountID: s.L7.accountid }),
                    l.createElement("div", { className: u.VerticalBar }),
                    l.createElement(M, { width: this.state.width }),
                  ),
                ),
              )
            : l.createElement(
                "div",
                { className: u.App },
                l.createElement(
                  "div",
                  { className: u.Login },
                  l.createElement(
                    "div",
                    { className: u.Text },
                    (0, _.Xx)("#LoginText"),
                  ),
                  l.createElement(
                    "div",
                    {
                      className: (0, m.Z)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: this.ShowLoginDialog,
                    },
                    l.createElement("span", null, (0, _.Xx)("#LoginButton")),
                  ),
                ),
              );
        }
      };
      (0, n.gn)([p.ak], w.prototype, "updateDimensions", null),
        (0, n.gn)([p.ak], w.prototype, "ShowLoginDialog", null),
        (w = (0, n.gn)([o.Pi], w));
      const O = w;
    },
  },
]);
