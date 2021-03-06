<template>
  <div class="topbar">
    <div id="c-mask-user-menu" @click="toggleUserMenu()"
         v-bind:class="{'is-active': !isUserMenuHidden}"
    >
    </div>

    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item sidebar-button" id="toggle-menu-button"
           @click='toggleSidebar()'
           v-bind:class="{'selected': !isSidebarHidden}">
          ≡
        </a>

        <div :class="{
          'nav-item': true,
        }" v-if="isProductionContext">
          <div class="level">
            <div class="level-item">
              <combobox
                class="context-selector"
                :options="openProductionOptions"
                :is-top="true"
                v-model="currentProductionId"
              />
              <strong>
              >
              </strong>
              <combobox
                class="context-selector"
                :options="navigationOptions"
                :is-top="true"
                v-model="currentProjectSection"
              />
              <strong
                v-if="isEpisodeContext"
              >
              >
              </strong>
              <combobox
                class="context-selector"
                :options="episodeOptions"
                :is-top="true"
                v-model="currentEpisodeId"
                v-if="isEpisodeContext"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="nav-right">
        <div
          class="nav-item"
        >
          <router-link :to="{name: 'notifications'}">
            <bell-icon
              :class="notificationBellClass"
            />
          </router-link>
        </div>

        <div
          :class="{
            'nav-item': true,
            'user-nav': true,
            active: !isUserMenuHidden
          }"
          ref="user-name"
          @click="toggleUserMenu"
        >
          <people-avatar
            ref="avatar"
            class="avatar"
            :no-cache="true"
            :person="user"
            :is-link="false"
          />
          <people-name
            class="user-name"
            :person="user"
          />
        </div>
      </div>
    </nav>

    <nav
      class="user-menu"
      ref="user-menu"
      v-show="!isUserMenuHidden"
    >
      <ul>
        <li>
          <router-link to="/profile" @click.native="toggleUserMenu()">
            {{ $t("main.profile") }}
          </router-link>
        </li>
        <li @click="toggleDarkTheme">
          <span v-if="!isDarkTheme">
            {{ $t("main.dark_theme ")}}
          </span>
          <span v-else>
            {{ $t("main.white_theme ")}}
          </span>
        </li>
        <li>
          <a href="https://kitsu.cg-wire.com" target="_blank">
            {{ $t("main.documentation ")}}
          </a>
        </li>
        <li @click="onLogoutClicked">
          {{ $t("main.logout") }}
        </li>
        <li class="version">
          Kitsu {{ kitsuVersion }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { BellIcon } from 'vue-feather-icons'

import Combobox from '../widgets/Combobox'
import PeopleAvatar from '../widgets/PeopleAvatar'
import PeopleName from '../widgets/PeopleName'
import { version } from '../../../package.json'

export default {
  name: 'topbar',
  components: {
    BellIcon,
    Combobox,
    PeopleName,
    PeopleAvatar
  },

  data () {
    return {
      currentProductionId: this.$route.params.production_id,
      currentEpisodeId: this.$route.params.episode_id,
      currentProjectSection: this.getCurrentSectionFromRoute(),
      kitsuVersion: version,
      silent: false
    }
  },

  mounted () {
    const userMenu = this.$refs['user-menu']
    const userName = this.$refs['user-name']
    if (userName) {
      const userNameWidth = userName.clientWidth

      if (userNameWidth > 100) {
        userMenu.style.width = `${userNameWidth}px`
        userName.style.width = `${userNameWidth}px`
      }
    }

    this.setProductionFromRoute()
  },

  computed: {
    ...mapGetters([
      'assetsPath',
      'currentEpisode',
      'currentProduction',
      'episodes',
      'episodeOptions',
      'isDarkTheme',
      'isSidebarHidden',
      'isUserMenuHidden',
      'isTVShow',
      'isNewNotification',
      'openProductions',
      'openProductionOptions',
      'productionMap',
      'user'
    ]),

    notificationBellClass () {
      if (this.isNewNotification) {
        return 'has-notifications'
      } else {
        return 'has-no-notifications'
      }
    },

    isShotPage () {
      return this.$route.params.episode_id
    },

    isProductionContext () {
      return this.$route.params.production_id !== undefined ||
        this.$route.path.indexOf('tasks') > 0
    },

    isEpisodeContext () {
      return this.isTVShow &&
             this.isShotPage &&
             // Do not display combobox if there is no episode
             this.episodes.length > 0
    },

    navigationOptions () {
      const options = [
        {label: this.$t('assets.title'), value: 'assets'},
        {label: this.$t('shots.title'), value: 'shots'},
        {label: this.$t('sequences.title'), value: 'sequences'},
        {label: this.$t('episodes.title'), value: 'episodes'},
        {label: this.$t('asset_types.production_title'), value: 'assetTypes'},
        {label: this.$t('breakdown.title'), value: 'breakdown'},
        {label: this.$t('playlists.title'), value: 'playlists'},
        {label: this.$t('people.team'), value: 'team'}
      ]
      if (!this.isTVShow) { // Remove episode Section from the list.
        options.splice(3, 1)
      }
      return options
    }
  },

  methods: {
    ...mapActions([
      'clearEpisodes',
      'loadEpisodes',
      'loadNotification',
      'logout',
      'setProduction',
      'setCurrentEpisode',
      'toggleDarkTheme',
      'toggleSidebar',
      'toggleUserMenu'
    ]),

    onLogoutClicked () {
      this.logout((err, success) => {
        if (err) console.log(err)
        this.toggleUserMenu()
        if (success) this.$router.push('/login')
      })
    },

    getCurrentSectionFromRoute () {
      let name = ''
      const segments = this.$route.path.split('/')
      if (this.isTVShow) {
        name = segments[5]
      }
      if (!name) {
        name = segments[3]

        if (name === 'episodes' && segments.length === 6) {
          name = segments[5]
        }
      }

      if (name === 'asset-types') name = 'assetTypes'
      return name
    },

    updateRoute () {
      const sectionFromRoute = this.getCurrentSectionFromRoute()
      let section = this.currentProjectSection

      const isProperContext =
        section &&
        this.$route.path.indexOf('manage') < 0

      const isContextChanged =
        section !== sectionFromRoute ||
        this.$route.params.production_id !== this.currentProductionId ||
        (
          this.currentEpisodeId &&
          this.$route.params.episode_id &&
          this.$route.params.episode_id !== this.currentEpisodeId
        )

      if (isProperContext && isContextChanged) {
        if (section === 'assetTypes') section = 'production-asset-types'
        this.pushContextRoute(section)
      }

      return this.$route.path
    },

    pushContextRoute (section) {
      let episodeId = this.currentEpisodeId
      let isTVShow = !!this.currentEpisodeId

      let route = {
        name: section,
        params: {
          production_id: this.currentProductionId
        }
      }

      if (
        this.productionMap[this.currentProductionId] &&
        (
          this.$route.params.production_id !== this.currentProductionId ||
          !episodeId
        )
      ) {
        episodeId =
          this.productionMap[this.currentProductionId].first_episode_id
        isTVShow =
          this.productionMap[this.currentProductionId].production_type === 'tvshow'
      }

      const isEpisodeContext =
        isTVShow &&
        section !== 'team' &&
        section !== 'episodes'

      if (isEpisodeContext) {
        route.name = `episode-${section}`
        route.params.episode_id = episodeId
      } else if (section === 'episodes' && !isTVShow) {
        route.name = 'assets'
      }

      if (
        route.params.production_id
      ) {
        this.$router.push(route)
      }
    },

    clearContext () {
      this.silent = true
      this.currentProductionId = null
      this.currentEpisodeId = null
      this.currentProjectSection = null
      this.setCurrentEpisode(null)
      this.setProduction(null)
      this.silent = false
    },

    setProductionFromRoute () {
      const routeProductionId = this.$route.params.production_id
      const routeEpisodeId = this.$route.params.episode_id
      if (!this.currentProduction ||
          this.currentProductionId !== routeProductionId ||
          this.currentProduction.id !== routeProductionId
      ) {
        this.setProduction(routeProductionId)
        if (this.isTVShow) {
          this.loadEpisodes(() => {
            this.setEpisodeFromRoute()
            this.updateComboFromRoute()
          })
        } else {
          this.clearEpisodes()
          this.updateComboFromRoute()
        }
      } else if (
        this.episodes.length < 2 &&
        this.isTVShow &&
        (
          !this.currentEpisode ||
          this.currentEpisode.id !== routeEpisodeId
        )
      ) {
        // This loading is required when the production is the first production
        // it is already set as current production but episodes are not
        // loaded.
        this.loadEpisodes(() => {
          this.setEpisodeFromRoute()
          this.updateComboFromRoute()
        })
      } else {
        if (this.assetsPath.name === 'open-productions' && routeProductionId) {
          this.setProduction(routeProductionId)
        }
        this.setEpisodeFromRoute()
        this.updateComboFromRoute()
      }
    },

    setEpisodeFromRoute () {
      const routeEpisodeId = this.$route.params.episode_id
      if (this.isTVShow) {
        if (
          !this.currentEpisode ||
          this.currentEpisodeId !== routeEpisodeId ||
          this.currentEpisode.id !== routeEpisodeId
        ) {
          this.setCurrentEpisode(routeEpisodeId)
        }
      } else {
        this.silent = true
        this.clearEpisodes()
        this.currentEpisodeId = null
        this.silent = false
      }
    },

    updateContext (productionId) {
      if (!productionId) {
        this.clearContext()
      } else {
        this.setProductionFromRoute()
      }
    },

    updateComboFromRoute () {
      const productionId = this.$route.params.production_id
      const episodeId = this.$route.params.episode_id
      const section = this.getCurrentSectionFromRoute()

      this.silent = true
      this.currentProductionId = productionId
      this.currentEpisodeId = episodeId
      this.currentProjectSection = section
      this.silent = false
    }
  },

  watch: {
    $route () {
      const productionId = this.$route.params.production_id
      this.updateContext(productionId)
    },

    currentProductionId () {
      if (!this.silent) this.updateRoute()
    },

    currentEpisodeId () {
      if (!this.silent) this.updateRoute()
    },

    currentProjectSection () {
      if (!this.silent) this.updateRoute()
    }
  },

  socket: {
    events: {
      'notification:new' (eventData) {
        if (this.user.id === eventData.person_id) {
          const notificationId = eventData.notification_id
          this.loadNotification(notificationId)
        }
      },

      'person:update' (eventData) {
        if (this.user.id === eventData.person_id) {
          this.$refs.avatar.reloadAvatar()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark .topbar .nav,
.dark .user-menu {
  background-color: $dark-grey-strong;
  color: $white-grey;
  border-left: 1px solid #2F3136;
  border-bottom: 1px solid #2F3136;
}

.dark .user-menu a {
  color: $white-grey;
}

.dark #toggle-menu-button:hover {
  color: $white-grey;
}

.nav {
  box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
  max-height: 60px;
  min-height: 60px;
  z-index: 204;
  position: fixed;
  left: 0;
  right: 0;
}

#toggle-menu-button {
  font-size: 2em;
}

.avatar {
  margin-right: 10px;
}

.user-nav {
  cursor: pointer;
  min-width: 150px;
}

.user-nav.active {
}

.user-menu {
  position: fixed;
  top: 60px;
  width: 200px;
  min-width: 150px;
  right: 0;
  background-color: white;
  padding: 1em 1em 1em 1em;
  z-index: 203;
  box-shadow: 2px 3px 3px rgba(0,0,0,0.2);
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  border-left: 1px solid $white-grey;
  border-bottom: 1px solid $white-grey;
}

.user-menu ul {
  margin-left: 0;
}

.user-menu li {
  cursor: pointer;
  padding: 0.2em;
  font-size: 1.1em;
  list-style-type: none;
}

.user-menu li a {
  color: #333;
}

#c-mask-user-menu {
  position: fixed;
  z-index: 202;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  background-color: #000;
  opacity: 0;
}

#c-mask-user-menu.is-active {
  width: 100%;
  height: 100%;
}

.nav-right {
  padding-right: 0;
}

.context-selector-label {
  margin-right: 1em;
}

.context-selector {
  margin-top: 23px;
  margin-right: 1em;
}

.has-no-notifications {
  margin-top: 5px;
  color: $light-grey;
}

.has-notifications {
  margin-top: 5px;
  color: #f57f17;
}

.icon-link {
  margin: 0 0.5em;
}

strong {
  margin-right: 1em;
}

.version {
  color: $grey;
}

@media screen and (max-width: 768px) {
  .home-button {
    display: none;
  }

  .nav-right {
    display: flex;
    flex:0;
  }

  .nav-item {
    justify-content: right;
  }

  .user-name {
    display: none;
  }

  .avatar {
    margin-right: 0;
  }

  .user-menu {
    right: -160;
  }

  .icon-link,
  .context-selector-label {
    display: none;
  }

  .field.context-selector {
    padding: 0;
    margin-top: 2em;
  }
}
</style>
