<template>
  <div class="navbar">
    <aside v-bind:class="{'hidden': isSidebarHidden}">
      <div>
        <router-link
           class="home-link"
           to="/"
           @click="toggleSidebar()"
        >
          <div
            class="company-logo has-text-centered"
          >
            <img src="../../assets/kitsu.png" />
            <h2 class="subtitle sidebar-title">Kitsu</h2>
          </div>
        </router-link>

        <section>
         <div v-if="!isCurrentUserClient">
           <h2>{{ $t('main.user')}}</h2>

           <p @click="toggleSidebar()">
             <router-link :to="{name: 'todos'}">
               {{ $t("tasks.my_tasks") }}
             </router-link>
           </p>
           <p @click="toggleSidebar()">
             <router-link :to="{name: 'open-productions'}">
               {{ $t("productions.open_productions") }}
             </router-link>
           </p>
         </div>

         <div v-if="isCurrentUserAdmin">
           <h2>{{ $t('main.studio')}}</h2>

           <p @click="toggleSidebar()">
             <router-link :to="{name: 'productions'}">
             {{ $t("productions.title") }}
             </router-link>
           </p>

           <p @click="toggleSidebar()">
             <router-link :to="{name: 'people'}">
             {{ $t("people.title") }}
             </router-link>
           </p>

           <p @click="toggleSidebar()">
             <router-link :to="{name: 'timesheets'}">
             {{ $t("timesheets.title") }}
             </router-link>
           </p>
         </div>

         <div v-if="isCurrentUserAdmin">
           <h2>{{ $t('main.admin')}}</h2>
           <p @click="toggleSidebar()">
             <router-link to="/task-types">
             {{ $t("task_types.title") }}
             </router-link>
           </p>
           <p @click="toggleSidebar()">
             <router-link to="/task-status" class="task-status-link">
             {{ $t("task_status.title") }}
             </router-link>
           </p>
           <p @click="toggleSidebar()">
             <router-link to="/asset-types">
             {{ $t("asset_types.title") }}
             </router-link>
           </p>
           <p @click="toggleSidebar()">
             <router-link :to="{name: 'custom-actions'}">
             {{ $t("custom_actions.title") }}
             </router-link>
           </p>
         </div>

        </section>
      </div>
    </aside>
    <div id="c-mask" @click="toggleSidebar()"
         v-bind:class="{'is-active': !isSidebarHidden}"
    >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isSidebarHidden',
      'isCurrentUserClient',
      'isCurrentUserCGArtist',
      'isCurrentUserManager',
      'isCurrentUserAdmin'
    ])
  },
  methods: {
    ...mapActions([
      'toggleSidebar'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dark aside {
  background-color: #2F3136;
  color: $white-grey;
}

aside {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: white;
  padding: 20px 1em 1em 1em;
  overflow-y: auto;
  z-index: 205;
  box-shadow: 1px 0px 6px rgba(0,0,0,0.2);
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

aside.hidden {
  left: -200px;
}

aside p a {
  font-size: 1.2em;
  text-transform: uppercase;
  color: $grey;
}

aside section {
  margin-bottom: 2em;
}

.sidebar-title {
  margin-top: 0;
  margin-bottom: 3em;
  text-align: center;
}

.company-logo {
  text-align: center;
}

#c-mask {
  position: fixed;
  z-index: 204;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 0;
  height: 0;
  background-color: #000;
  opacity: 0;
}

#c-mask.is-active {
  width: 100%;
  height: 100%;
}

h2 {
  margin-top: 2em;
}

@media screen and (max-width: 768px) {
  .company-logo img {
    width: 40px;
    margin: 0;
    flex: 1;
  }

  .home-link {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .home-link h2 {
    margin-bottom: 0;
  }
}
</style>
