(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5263],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "_2ilpH-HpvuSm6s5MWX5bA-",
        Header: "_2_vbZB-J_M1GH9js-PXnEj",
        Title: "_2yJ4jvaS0kUJdPVIPR_gld",
        Description: "_16dREqlIrGflPfbNtLGdJh",
        ButtonContainer: "JYQgsMzgbFLgarphirEoQ",
        Button: "_3M92hj6aELzceURcKR7WFu",
        Selected: "Efo_8muMPNLjjSbObMuDq",
        Disabled: "_3k_TnD8zygLxN0YOdqn9B1",
        LabelCtn: "_3jka4zmfNL8_t69ZkB-JmU",
        IconCtn: "_1fdGEFL1uEyxjfiarnOXI",
        Label: "_2iEkqauHWZiCAOo0cWqnPP",
        Points: "_3k_jxlKBddOAxgSknpHNTq",
        IconCheckMark: "_38WUBpAcqEe6Neu89Kri9T",
        Footer: "_164mmLkSJ91cXzABhIrlZq",
        Left: "_1v0jLHAK-8P4IONBwuF4kv",
        BalanceIcon: "_3VvvB-r8dZsAaPGZ2nsi1A",
        BalanceDetails: "_209Gyxysjz0vcGVVWuh_Xc",
        BalanceLabel: "_2u9RZJXJSDg3e-J_EX1exE",
        BalanceAmount: "_1O3FSoJxkQYLv1MB6H7QNy",
        Right: "_1hgRCff96-fQY4zKEKUkac",
        Actions: "_1-AT2x5dQpwoR2WGoLgbhi",
        Action: "_1Beae_Paey3Y7zly_GQZpI",
        FooterLink: "KId8dCUFbYh_bz-jozERD",
        Divider: "_105pyOdHwQJP6rdcKymwUq",
        ConfirmContainer: "_3rAoeyoUq23O8OYP09P1oz",
        ConfirmAwardImage: "_1ARgx7wEEFOEolu5lBhrk-",
        ConfirmTextCtn: "j0Jt4NEMft-y_QAF5NFFh",
        ConfirmText: "_1uA9QkRBqGe3Xt5tlGGhlU",
        AwardName: "_25N0xPcslHWWCQovL3Ycpk",
        TimePeriod: "_6mEUOxWKweU9C1C2VmgsZ",
        Visible: "_2QQTWF2AuPKh-8O0fgjl3b",
        LoadingContainer: "_1hKG3O3_MI7rp8_HJ7_0fV",
        SuccessContainer: "Uz_0uByMqbJfo6n5oW71y",
        SuccessText: "_1kQzNssyGs4FwglLbkE3mx",
        InitialLoading: "_1ZKr7z5ZdQghkZZCnjx455",
        ErrorContainer: "_1SebPOeiRaEqfXHg_dsaYQ",
        ErrorText: "ok8moMj5E4XI25uTRhAHN",
        PointsAmount: "_1WCEAVbVX-TuOWAkFll4DS",
        PointsAmountIcon: "_3-jpV0SaW4qH2i8S7BXeAB",
        NotEnoughPoints: "_2VkAejyr5j-VMhlWHIoMvK",
      };
    },
    chunkid: (module) => {
      module.exports = {
        UnstyledButton: "_1hcJa9ylImmFKuHsfilos",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (0, _._)(this),
            (this.m_transport = _);
        }
        BIsLoggedIn() {
          return _._.logged_in;
        }
        async SetTarget(_, _) {
          return (
            (this.m_targetID = _),
            (this.m_eTargetType = _),
            this.LoadExistingReactions()
          );
        }
        async AddReaction(_) {
          if (!this.BIsLoggedIn())
            return {
              eResult: 21,
              strMessage: "Not logged on",
            };
          let _ = _._.Init(_._);
          _.Body().set_target_type(this.m_eTargetType),
            _.Body().set_targetid(this.m_targetID),
            _.Body().set_reactionid(_),
            console.log(" ProtoBuf sending..."),
            console.log(_),
            console.log("Target ID is..." + _.Body().targetid());
          let _ = await _._.AddReaction(this.m_transport, _);
          return (
            1 == __webpack_require__.GetEResult() &&
              (this.m_bPointsBalanceLoadedOrInFlight = !1),
            {
              eResult: __webpack_require__.GetEResult(),
              strMessage: "",
            }
          );
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        async LoadUserPointBalance() {
          if (!this.BIsLoggedIn()) return Promise.resolve(null);
          this.m_bPointsBalanceLoadedOrInFlight = !0;
          const _ = _._.Init(_._);
          _.SetBodyFields({
            steamid: _._.steamid,
          });
          let _ = await _._.GetSummary(this.m_transport, _);
          1 == _.GetEResult()
            ? (this.m_lPointsAvailable = _._.fromString(
                _.Body().summary().points(),
              ))
            : console.error(
                `Error when calling LoyaltyRewardsService.GetSummary: EResult=${_.GetEResult()}`,
              );
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        async LoadAwardsConfiguration() {
          this.m_bReactionConfigurationLoadedOrInFlight = !0;
          const _ = _._.Init(_._);
          let _ = await _._.GetReactionConfig(this.m_transport, _);
          if (1 == _.GetEResult()) {
            let _ = _.Body().toObject().reactions;
            for (const _ of _)
              this.m_mapReactionConfiguration.set(_.reactionid, _);
          } else
            console.error(
              `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${_.GetEResult()}`,
            );
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        async LoadExistingReactions() {
          if (!this.BIsLoggedIn()) return 21;
          this.m_mapExistingReactions.clear();
          const _ = _._.Init(_._);
          _.Body().set_target_type(this.m_eTargetType),
            _.Body().set_targetid(this.m_targetID);
          let _ = await _._.GetReactions(this.m_transport, _);
          return (
            1 == _.GetEResult() &&
              _.Body()
                .reactionids()
                .map((_) => this.m_mapExistingReactions.set(_, !0)),
            _.GetEResult()
          );
        }
      }
      (0, _._)([_._.ref], _.prototype, "m_lPointsAvailable", void 0),
        (0, _._)([_._.deep], _.prototype, "m_mapReactionConfiguration", void 0),
        (0, _._)([_._.deep], _.prototype, "m_mapExistingReactions", void 0);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      var _;
      function _(_) {
        switch (_) {
          case _.Gold:
          case _.LNY2020:
            return `hsl(${51 + -16 * Math.random()}, 93%, 54%)`;
          default:
            return `hsl(${360 * Math.random()}, 100%, 40%)`;
        }
      }
      function _(_) {
        return _ == _.LNY2020
          ? `hue-rotate(${360 + ((0, _._))(-30, 10)}deg)`
          : "";
      }
      !(function (_) {
        (_[(_.Default = 0)] = "Default"),
          (_[(_.Gold = 1)] = "Gold"),
          (_[(_.LNY2020 = 2)] = "LNY2020");
      })(_ || (_ = {}));
      const _ = (_, _) => {
          const { anim: __webpack_require__ } = (0, _._)({
              anim: 1,
              from: {
                anim: 0,
              },
              config: {
                duration: 8e3,
              },
            }),
            _ = (0, _.useMemo)(() => {
              let _ = (function (_, _) {
                  const _ = [];
                  if (!_) return _;
                  const { width: _, height: _ } = _;
                  for (let _ = 0; _ < 200; _++) {
                    const _ = Math.random(),
                      _ = Math.random() * _,
                      _ = Math.random() * _,
                      _ = 4 * (Math.random() - 0.5) * Math._ * 20,
                      _ = Math.random() + 0.5,
                      _ = [
                        Math.random() * _ - _ - 20,
                        _ + 20 + Math.random() * _ * _,
                      ],
                      _ = _ * (_ <= 1e3 ? 1 : _ / 1e3) * (_ == _.Gold ? 2 : 1),
                      _ = (Math.random() - 0.5) * _,
                      _ = (Math.random() - 0.5) * _,
                      _ = [_, _ + _],
                      _ = _(_),
                      _ = _(_);
                    __webpack_require__.push({
                      rotationCoefficient: _,
                      rotationRatioY: _,
                      rotationRatioX: _,
                      rotationRatioZ: _,
                      yRange: _,
                      xRange: _,
                      scale: _,
                      colorHue: _,
                      filter: _,
                    });
                  }
                  return _;
                })(_, _),
                _ = _.map((_) =>
                  (function (_, _, _) {
                    _.Default;
                    const {
                      rotationCoefficient: _,
                      rotationRatioY: _,
                      rotationRatioX: _,
                      rotationRatioZ: _,
                      yRange: _,
                      xRange: _,
                      scale: _,
                      colorHue: _,
                      filter: _,
                    } = _;
                    return {
                      backgroundColor: _,
                      fill: _,
                      filter: _,
                      flRandom: 0,
                      transform: _.interpolate((_) => {
                        const _ = _ * _ * _,
                          _ = _ * _ * _,
                          _ = _ * _ * _,
                          _ = _ * (_[1] - _[0]) + _[0];
                        return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateY(${_}rad) rotateX(${_}rad) rotateZ(${_}rad) scale(${_})`;
                      }),
                    };
                  })(_, __webpack_require__),
                ),
                _ = _.map((_) =>
                  (function (_, _, _) {
                    if (Math.random() > 0.1) return null;
                    const {
                      rotationCoefficient: _,
                      rotationRatioZ: _,
                      yRange: _,
                      xRange: _,
                      scale: _,
                      colorHue: _,
                      filter: _,
                    } = _;
                    return {
                      backgroundColor: void 0,
                      fill: _,
                      filter: _,
                      flRandom: Math.random(),
                      transform: _.interpolate((_) => {
                        const _ = ((_ * _) / 4) * _,
                          _ = _ * (_[1] - _[0]) + _[0];
                        return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateZ(${_}rad) scale(${_})`;
                      }),
                    };
                  })(_, __webpack_require__),
                ).filter((_) => !!_);
              return {
                rgParticleStyles: _,
                rgStreamerStyles: _,
              };
            }, [_, _, __webpack_require__]);
          return _;
        },
        _ = {
          position: "absolute",
          left: "50%",
          top: 0,
        },
        _ = {
          ..._,
          width: 10,
          height: 5,
          borderWidth: 1,
          borderColor: "black",
        },
        _ = ({ eType: _ }) => {
          _.Gold, _.LNY2020;
          const [_, __webpack_require__] = (function () {
            const [_, _] = (0, _.useState)(null),
              _ = (0, _.useCallback)((_) => {
                _ &&
                  "function" == typeof _.getBoundingClientRect &&
                  _(_.getBoundingClientRect());
              }, []);
            return [_, _];
          })();
          let _,
            { rgParticleStyles: _, rgStreamerStyles: _ } = _(_, _);
          switch (_) {
            case _.Gold:
              _ = _.map((_, _) =>
                _.createElement(_, {
                  key: _,
                  style: _,
                }),
              );
              break;
            case _.LNY2020:
              _ = _.map((_, _) =>
                _ % 2
                  ? _.createElement(_, {
                      key: _,
                      style: _,
                    })
                  : _.createElement(_, {
                      key: _,
                      style: _,
                    }),
              );
              break;
            case _.Default:
              _ = _.map((_, _) =>
                _.createElement(_, {
                  key: _,
                  style: _,
                }),
              );
          }
          return _.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: __webpack_require__,
            },
            _,
            _.map((_, _) =>
              _.flRandom > 0.5
                ? _.createElement(_, {
                    key: _,
                    style: _,
                  })
                : _.createElement(_, {
                    key: _,
                    style: _,
                  }),
            ),
          );
        },
        _ = ({ style: _ }) =>
          _.createElement(_._.div, {
            style: {
              ..._,
              ..._,
            },
          }),
        _ = ({ style: _ }) => {
          const [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
            _ = _[_];
          return _.createElement(_, {
            style: {
              ..._,
              ..._,
              backgroundColor: void 0,
            },
          });
        },
        _ = ({ style: _ }) => {
          const [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
            _ = _[_];
          return _.createElement(_, {
            style: {
              ..._,
              ..._,
              backgroundColor: void 0,
            },
          });
        },
        _ = ({ style: _ }) =>
          _.createElement(
            _._.svg,
            {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                width: 10,
                height: 70,
                ..._,
              },
            },
            _.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              _: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
              fill: _.fill,
            }),
          ),
        _ = ({ style: _ }) =>
          _.createElement(
            _._.svg,
            {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                width: 10,
                height: 20,
                ..._,
              },
            },
            _.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              _: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
              fill: _.fill,
            }),
          ),
        _ = [
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 102",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 5,
                  height: 10,
                  ..._,
                },
              },
              _.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 50 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 7,
                  ..._,
                },
              },
              _.createElement("path", {
                _: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: "#C4C4C4",
              }),
              _.createElement("path", {
                _: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 68 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 10,
                  ..._,
                },
              },
              _.createElement("rect", {
                _: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 10,
                  ..._,
                },
              },
              _.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 8,
                  ..._,
                },
              },
              _.createElement("ellipse", {
                _: "24",
                _: "15",
                _: "24",
                _: "15",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 8,
                  ..._,
                },
              },
              _.createElement("ellipse", {
                _: "24",
                _: "15",
                _: "24",
                _: "15",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 8,
                  ..._,
                },
              },
              _.createElement("ellipse", {
                _: "24",
                _: "15",
                _: "24",
                _: "15",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 8,
                  ..._,
                },
              },
              _.createElement("path", {
                _: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                fill: _.fill,
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                  width: 10,
                  height: 7,
                  ..._,
                },
              },
              _.createElement("path", {
                _: "M48 0H0L24 35L48 0Z",
                fill: _.fill,
              }),
            ),
        ],
        _ = [
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: {
                  width: 28,
                  height: 28,
                  ..._,
                },
              },
              _.createElement("polygon", {
                fill: "#60000e",
                points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
              }),
              _.createElement("path", {
                fill: "#f93838",
                _: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
              }),
              _.createElement("path", {
                fill: "#f93838",
                _: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
              }),
            ),
          ({ style: _ }) =>
            _.createElement(
              _._.svg,
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                _: "0px",
                _: "0px",
                viewBox: "0 0 14.5 22",
                style: {
                  width: 28,
                  height: 28,
                  ..._,
                },
              },
              _.createElement("path", {
                fill: "#fc1010",
                _: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
              }),
              _.createElement("path", {
                fill: "#fc1010",
                _: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
              }),
              _.createElement("path", {
                fill: "#fc1010",
                _: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
              }),
              _.createElement("path", {
                fill: "#fc1010",
                _: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
              }),
            ),
        ];
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (0, _._)(`#RewardsReaction_${_}`);
      }
      var _ = __webpack_require__("chunkid");
      const _ = (_) => {
        const { className: _, ...__webpack_require__ } = _;
        return _.createElement(_._, {
          className: (0, _._)(_, _.UnstyledButton),
          ...__webpack_require__,
        });
      };
      var _, _, _;
      !(function (_) {
        (_[(_.LOADING = 0)] = "LOADING"),
          (_[(_.SELECTING = 1)] = "SELECTING"),
          (_[(_.CONFIRM = 2)] = "CONFIRM"),
          (_[(_.SUBMITTING = 3)] = "SUBMITTING"),
          (_[(_.DONE = 4)] = "DONE"),
          (_[(_.ERROR = 5)] = "ERROR"),
          (_[(_.LOADING_ERROR = 6)] = "LOADING_ERROR");
      })(_ || (_ = {}));
      const _ = (_) =>
        _.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class _ extends _.PureComponent {
        constructor(_) {
          super(_),
            (this.state = {
              bHovered: !1,
            });
        }
        handleMouseOver(_) {
          this.setState({
            bHovered: !0,
          });
        }
        handleMouseOut() {
          this.setState({
            bHovered: !1,
          });
        }
        render() {
          const _ =
            ((_ = this.props.reactionType),
            (__webpack_require__ =
              !this.props.bDisableAnimation &&
              (this.state.bHovered || this.props.bForceAnimated)),
            `${_._.STORE_CDN_URL}public/images/loyalty/reactions/${__webpack_require__ ? "animated" : "still"}/${_}.png`);
          var _, _;
          return _.createElement("img", {
            className: this.props.className,
            src: _,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, _._)([_._], _.prototype, "handleMouseOver", null),
        (0, _._)([_._], _.prototype, "handleMouseOut", null);
      let _ = (_ = class extends _.Component {
        constructor(_) {
          super(_),
            (window.fnLoyalty_ShowAwardModal = (_, _, _, _, _) => {
              _ || (_ = 0),
                this.Init(_.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: _,
                  targetid: _,
                  ugcType: _,
                  initialSelectedReaction: _,
                  targetType: _,
                });
            }),
            (this.state = {
              bLoading: !0,
            });
        }
        async Init(_) {
          if (_.s_LoyaltyAwardModalStore) return;
          if (_) return void (_.s_LoyaltyAwardModalStore = new _(_));
          const _ = {
              ...(0, _._)("loyaltystore", "application_config"),
              ...(await (async function () {
                try {
                  const _ = await _().get(
                    `${(0, _._)()}pointssummary/ajaxgetasyncconfig`,
                    {
                      withCredentials: !0,
                    },
                  );
                  return 1 === _.data.success
                    ? _.data.data
                    : (console.error(
                        `Failed to load async config: ${_.data.success}`,
                      ),
                      {});
                } catch (_) {
                  return (
                    console.error(
                      `Unexpected failure while loading async config: ${_}`,
                    ),
                    {}
                  );
                }
              })()),
            },
            _ = new _._(_._.WEBAPI_BASE_URL, _.webapi_token);
          (_.s_LoyaltyAwardModalStore = new _(
            __webpack_require__.GetServiceTransport(),
          )),
            this.setState({
              bLoading: !1,
            });
        }
        render() {
          const {
            bLoading: _,
            bShowModal: _,
            targetType: __webpack_require__,
            fnSuccessFunc: _,
            targetid: _,
            ugcType: _,
            initialSelectedReaction: _,
          } = this.state;
          return _
            ? _
              ? _.createElement(
                  _._,
                  {
                    className: _.GrantAwardModal,
                    active: !0,
                    onDismiss: () =>
                      this.setState({
                        bShowModal: !1,
                      }),
                  },
                  _.createElement(_, null),
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      className: _.InitialLoading,
                    },
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(_.LoadingContainer, _.Visible),
                      },
                      _.createElement(_, null),
                    ),
                  ),
                )
              : _.createElement(_, {
                  key: _,
                  targetid: _,
                  active: _,
                  targetType: __webpack_require__,
                  ugcType: _,
                  onDismiss: () =>
                    this.setState({
                      bShowModal: !1,
                    }),
                  onSuccess: _,
                  store: _.s_LoyaltyAwardModalStore,
                  initialSelectedReaction: _,
                })
            : null;
        }
      });
      (_.defaultProps = {
        targetType: 1,
      }),
        (_ = _ = (0, _._)([_._], _));
      const _ = _;
      let _ = (_ = class extends _.Component {
        static Initialize(_) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new _(_.GetServiceTransport()));
        }
        constructor(_) {
          super(_);
        }
        render() {
          const {
            targetType: _,
            targetid: _,
            bShowModal: __webpack_require__,
            ugcType: _,
            initialSelectedReaction: _,
            onDismiss: _,
          } = this.props;
          return _.createElement(_, {
            key: _,
            targetid: _,
            active: __webpack_require__,
            targetType: _,
            ugcType: _,
            onDismiss: _,
            onSuccess: _,
            store: _.s_LoyaltyAwardModalStore,
            initialSelectedReaction: _,
          });
        }
      });
      (_.s_LoyaltyAwardModalStore = null), (_ = _ = (0, _._)([_._], _));
      let _ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.state = {
              selectedReaction: _.initialSelectedReaction || 0,
              ePhase: _.LOADING,
            });
        }
        async componentDidMount() {
          let _ = await this.props.store.SetTarget(
            this.props.targetid,
            this.props.targetType,
          );
          1 == _
            ? this.setState({
                ePhase: _.SELECTING,
              })
            : this.setState({
                ePhase: _.LOADING_ERROR,
                eResult: _,
              });
        }
        render() {
          const {
              active: _,
              targetType: _,
              ugcType: __webpack_require__,
              store: _,
              onDismiss: _,
            } = this.props,
            { selectedReaction: _, ePhase: _, celebrate: _ } = this.state;
          if (!_) return null;
          const _ = _.GetExistingReactions(),
            _ = _.GetAwardConfigurations(),
            _ = _.GetUserPointBalance(),
            _ = (function (_, _, _) {
              let _ = [];
              return (
                _.forEach(function (_) {
                  if (_.valid_target_types.includes(_))
                    switch (_) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        _.push(_.reactionid);
                        break;
                      case 2:
                        _.valid_ugc_types.includes(_) && _.push(_.reactionid);
                    }
                }),
                _
              );
            })(_, _, __webpack_require__),
            _ = 0 === _ ? null : _.get(_),
            _ = _ ? _.points_cost : 0,
            _ = _ ? _.points_transferred : 0;
          let _,
            _ = "";
          switch (_) {
            case 1:
              _ = (0, _._)("#GrantAwardDescription_Review");
              break;
            case 2:
              _ = (0, _._)("#GrantAwardDescription_UGC");
              break;
            case 3:
              _ = (0, _._)("#GrantAwardDescription_Profile");
              break;
            case 4:
              _ = (0, _._)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              _ = (0, _._)("#GrantAwardDescription_Comment");
          }
          switch (_) {
            case _.LOADING:
            case _.SELECTING:
              {
                const _ = 0 === _ || _.get(_),
                  _ = !_ || _.greaterThanOrEqual(_),
                  _ = _.createElement(
                    _._,
                    {
                      onClick: () =>
                        this.setState({
                          ePhase: _.CONFIRM,
                        }),
                      disabled: _,
                      focusable: !_,
                      title: (0, _._)(
                        _
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, _._)(
                      _ ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                _ = _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, {
                    description: _,
                  }),
                  _.createElement(_, null),
                  0 === _.length &&
                    _.createElement(
                      "div",
                      {
                        className: _.InitialLoading,
                      },
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(_.LoadingContainer, _.Visible),
                        },
                        _.createElement(_, null),
                      ),
                    ),
                  _.createElement(
                    _._,
                    {
                      className: _.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    _.map((_, _) =>
                      _.createElement(_, {
                        autoFocus: 0 == _,
                        key: _,
                        reaction: _,
                        selected: _ === _ && !_.get(_),
                        cost: _.get(_).points_cost,
                        alreadyAwarded: _.get(_),
                        onClick: () => {
                          _.get(_) ||
                            this.setState({
                              selectedReaction: _ === _ ? 0 : _,
                            });
                        },
                      }),
                    ),
                  ),
                  _.createElement(_, null),
                  _.createElement(
                    _,
                    {
                      store: _,
                    },
                    _ || _
                      ? _
                      : [
                          _.createElement(
                            "div",
                            {
                              key: "msg",
                              className: _.NotEnoughPoints,
                            },
                            (0, _._)(
                              "#GrantAward_CantAfford",
                              _.negate().add(_).toNumber().toLocaleString(),
                            ),
                          ),
                          _.createElement(
                            _._,
                            {
                              key: "button",
                              href: `${_._.STORE_BASE_URL}points/howitworks`,
                            },
                            _.createElement(
                              _._,
                              {
                                key: "button",
                              },
                              (0, _._)("#GrantAward_HowToGetPoints"),
                            ),
                          ),
                        ],
                  ),
                );
              }
              break;
            case _.CONFIRM:
            case _.SUBMITTING:
            case _.DONE:
              _ = _.createElement(
                _.Fragment,
                null,
                _.createElement(_, {
                  description: _,
                }),
                _.createElement(_, null),
                _.createElement(
                  "div",
                  {
                    style: {
                      position: "relative",
                    },
                  },
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(
                        _.ConfirmContainer,
                        _ === _.CONFIRM && _.Visible,
                      ),
                    },
                    _.createElement(_, {
                      className: _.ConfirmAwardImage,
                      reactionType: _,
                    }),
                    _.createElement(
                      "div",
                      {
                        className: _.ConfirmTextCtn,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _.ConfirmText,
                        },
                        (0, _._)(
                          "#GrantAward_Confirm",
                          _.createElement(_, null, _.toLocaleString()),
                          _.createElement(
                            "span",
                            {
                              className: _.AwardName,
                            },
                            _(_),
                          ),
                        ),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _.ConfirmText,
                        },
                        (0, _._)(
                          "#GrantAward_Confirm_Details",
                          _.createElement(_, null, _.toLocaleString()),
                          _.createElement(
                            "span",
                            {
                              className: _.TimePeriod,
                            },
                            (0, _._)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(
                        _.LoadingContainer,
                        _ === _.SUBMITTING && _.Visible,
                      ),
                    },
                    _.createElement(_, null),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(
                        _.SuccessContainer,
                        _ === _.DONE && _.Visible,
                      ),
                    },
                    _.createElement(_, {
                      className: _.ConfirmAwardImage,
                      reactionType: _,
                    }),
                    _.createElement(
                      "div",
                      {
                        className: _.SuccessText,
                      },
                      (0, _._)("#GrantAward_Success"),
                    ),
                  ),
                ),
                _.createElement(_, null),
                _.createElement(
                  _,
                  {
                    store: _,
                  },
                  _.createElement(
                    _._,
                    {
                      onClick: () =>
                        this.setState({
                          ePhase: _.SELECTING,
                        }),
                      disabled: _ !== _.CONFIRM,
                    },
                    (0, _._)("#GrantAward_Back"),
                  ),
                  _.createElement(
                    _._,
                    {
                      onClick: this.GrantAward,
                      title: (0, _._)("#GrantAward_SubmitTooltip"),
                      disabled: _ !== _.CONFIRM,
                    },
                    (0, _._)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case _.ERROR:
              {
                let _ = "";
                switch (this.state.eResult) {
                  case 10:
                    _ = (0, _._)("#GrantAwardError_Busy");
                    break;
                  case 32:
                    _ = (0, _._)("#GrantAwardError_PersistFailed");
                    break;
                  case 8:
                    _ = (0, _._)("#GrantAwardError_InvalidParam");
                    break;
                  case 42:
                    _ = (0, _._)("#GrantAwardError_NoMatch");
                    break;
                  case 107:
                    _ = (0, _._)("#GrantAwardError_InsufficientFunds");
                    break;
                  case 15:
                    _ = (0, _._)("#GrantAwardError_AccessDenied");
                    break;
                  case 21:
                    _ = (0, _._)("#GrantAwardError_NotLoggedOn");
                    break;
                  case 29:
                    _ = (0, _._)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    _ = (0, _._)("#GrantAwardError_Fail");
                }
                _ = _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, {
                    description: _,
                  }),
                  _.createElement(_, null),
                  _.createElement(
                    "div",
                    {
                      style: {
                        position: "relative",
                      },
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.ErrorContainer,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _.ErrorText,
                        },
                        _,
                      ),
                    ),
                  ),
                  _.createElement(_, null),
                  _.createElement(
                    _,
                    {
                      store: _,
                    },
                    _.createElement(
                      _._,
                      {
                        onClick: () =>
                          this.setState({
                            ePhase: _.SELECTING,
                          }),
                      },
                      (0, _._)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case _.LOADING_ERROR: {
              let _ = "";
              switch (this.state.eResult) {
                case 10:
                  _ = (0, _._)("#GrantAwardError_Busy");
                  break;
                case 21:
                  _ = (0, _._)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  _ = (0, _._)("#GrantAwardError_LoadExistingReactions");
              }
              _ = _.createElement(
                _.Fragment,
                null,
                _.createElement(_, {
                  description: _,
                }),
                _.createElement(_, null),
                _.createElement(
                  "div",
                  {
                    style: {
                      position: "relative",
                    },
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.ErrorContainer,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.ErrorText,
                      },
                      _,
                    ),
                  ),
                ),
                _.createElement(_, null),
              );
            }
          }
          return _.createElement(
            _._,
            {
              className: _.GrantAwardModal,
              active: _,
              onDismiss: _,
            },
            _.createElement(
              _._,
              {
                navID: "GrantAward",
                closeModal: _,
              },
              _ &&
                _.createElement(_, {
                  eType: _.Default,
                }),
              _,
            ),
          );
        }
        GrantAward() {
          const {
              targetid: _,
              store: _,
              onSuccess: __webpack_require__,
            } = this.props,
            { selectedReaction: _ } = this.state;
          null !== _ &&
            0 != _ &&
            (this.setState({
              ePhase: _.SUBMITTING,
            }),
            _.AddReaction(_).then(({ eResult: _, strMessage: _ }) => {
              1 == _
                ? this.setState(
                    {
                      ePhase: _.DONE,
                      celebrate: !0,
                    },
                    () =>
                      setTimeout(() => {
                        __webpack_require__ && __webpack_require__(_, _);
                      }, 2e3),
                  )
                : this.setState({
                    ePhase: _.ERROR,
                    eResult: _,
                  });
            }));
        }
      };
      (0, _._)([_._], _.prototype, "GrantAward", null),
        (_ = (0, _._)([_._], _));
      const _ = ({ description: _ }) =>
          _.createElement(
            "div",
            {
              className: _.Header,
            },
            _.createElement(
              "div",
              {
                className: _.Title,
              },
              (0, _._)("#GrantAwardTitle"),
            ),
            _.createElement(
              "div",
              {
                className: _.Description,
              },
              _,
            ),
          ),
        _ = (0, _._)(({ store: _, children: _ }) => {
          const _ = _.GetUserPointBalance(),
            _ = _ && __webpack_require__.toNumber().toLocaleString();
          return _.createElement(
            "div",
            {
              className: _.Footer,
            },
            _.createElement(
              "div",
              {
                className: _.Left,
              },
              _.createElement(_.vrn, {
                className: _.BalanceIcon,
              }),
              _.createElement(
                "div",
                {
                  className: _.BalanceDetails,
                },
                _.createElement(
                  "div",
                  {
                    className: _.BalanceLabel,
                  },
                  (0, _._)("#YourBalance"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.BalanceAmount,
                  },
                  _,
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.Right,
              },
              _.createElement(
                _._,
                {
                  className: _.Actions,
                  "flow-children": "row",
                },
                _.Children.map(_, (_) =>
                  _.createElement(
                    "div",
                    {
                      className: _.Action,
                    },
                    _,
                  ),
                ),
              ),
              _.createElement(
                "a",
                {
                  className: _.FooterLink,
                  href: `${_._.STORE_BASE_URL}points/howitworks`,
                },
                (0, _._)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        _ = () =>
          _.createElement("div", {
            className: _.Divider,
          });
      class _ extends _.PureComponent {
        constructor(_) {
          super(_),
            (this.state = {
              bHovered: !1,
            });
        }
        handleMouseOver(_) {
          this.setState({
            bHovered: !0,
          });
        }
        handleMouseOut() {
          this.setState({
            bHovered: !1,
          });
        }
        render() {
          const {
            reaction: _,
            selected: _,
            alreadyAwarded: __webpack_require__,
            cost: _,
            autoFocus: _,
            ..._
          } = this.props;
          return _.createElement(
            _,
            {
              type: "button",
              onMouseEnter: this.handleMouseOver,
              onMouseLeave: this.handleMouseOut,
              className: (0, _._)(
                _.Button,
                _ && _.Selected,
                __webpack_require__ && _.Disabled,
              ),
              autoFocus: _,
              ..._,
            },
            _.createElement(
              "div",
              {
                className: _.IconCtn,
              },
              _.createElement(_, {
                reactionType: _,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: __webpack_require__,
              }),
            ),
            _.createElement(
              "div",
              {
                className: _.LabelCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.Label,
                },
                _(_),
              ),
              _.createElement(
                _,
                {
                  className: _.Points,
                },
                _.toLocaleString(),
              ),
            ),
            __webpack_require__ &&
              _.createElement(_, {
                className: _.IconCheckMark,
              }),
          );
        }
      }
      (0, _._)([_._], _.prototype, "handleMouseOver", null),
        (0, _._)([_._], _.prototype, "handleMouseOut", null);
      const _ = () =>
          _.createElement(_._, {
            size: "large",
            className: _.Loading,
          }),
        _ = (_) => {
          const { children: _, className: __webpack_require__, ..._ } = _;
          return _.createElement(
            "span",
            {
              ..._,
              className: (0, _._)(__webpack_require__, _.PointsAmount),
            },
            _.createElement(_.vrn, {
              className: _.PointsAmountIcon,
            }),
            _,
          );
        };
    },
  },
]);
