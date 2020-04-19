<template>
  <b-container fluid>
    <div>
      <b-row>
        <b-col cols="3" :key="index" v-for="(source, index) in workingPlayers">
          <HlsPlayer v-bind:id="source.id" v-bind:title="source.title" v-bind:url="source.url"></HlsPlayer>
        </b-col>
        <!-- <b-col>
          <HlsPlayer v-bind:title="aa" v-bind:url="url"></HlsPlayer>
        </b-col> -->
      </b-row>
    </div>
    <b-button id="menu-btn" pill variant="outline-light" v-b-toggle.sidebar-right>
      <b-icon icon="chevron-left"></b-icon>
    </b-button>
    <b-sidebar id="sidebar-right" title="菜单项" width="20%" max-width="300" min-width="180" right shadow>
      <template v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">
            <b-icon scale="2" icon="arrows-fullscreen" @click="getFullCreeen"></b-icon>
          </strong>
          <b-icon @click="hide" icon="x-circle" scale="2" variant="danger"></b-icon>
        </div>
      </template>
      <div class="px-3 py-2">
        <b-form-group label="选择视频源:" align="left">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selectedChannels"
            :options="channelOptions"
            name="flavour-1"
            inline
          ></b-form-checkbox-group>
        </b-form-group>
        <div>
          <b-button variant="outline-primary" @click="initPlayers"><b-icon-play-fill></b-icon-play-fill></b-button>
          <b-button variant="outline-warning" @click="destoryPlayers"><b-icon-pause-fill></b-icon-pause-fill></b-button>
        </div>
      </div>
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item active @click="toRecord">观看录像</b-nav-item>
        </b-nav>
      </nav>
      <div class="px-3 py-2">
        <b-button block variant="danger" @click="signOut">退出登录</b-button>
      </div>
    </b-sidebar>
  </b-container>
</template>
<script>
import screenfull from 'screenfull'
import { BIcon, BIconChevronLeft, BIconArrowsFullscreen, BIconXCircle, BIconPlayFill, BIconPauseFill } from 'bootstrap-vue'
import HlsPlayer from '@/components/HlsPlayer'
export default {
  name: 'live',
  components: {
    BIcon,
    BIconChevronLeft,
    BIconArrowsFullscreen,
    BIconXCircle,
    BIconPlayFill,
    BIconPauseFill,
    HlsPlayer
  },
  data: function () {
    return {
      videoSources: [],
      workingPlayers: [],
      selectedChannels: [], // Must be an array reference!
      channelOptions: []
    }
  },
  methods: {
    // 全屏事件
    getFullCreeen () {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    },
    signOut () {
      this.$router.push('/')
    },
    toRecord () {
      this.$router.push('/Record')
    },
    getVideosources () {
      let sources = [
        {
          id: 1,
          title: 'CCTV1',
          url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
        },
        {
          id: 3,
          title: 'CCTV3',
          url: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
        },
        {
          id: 6,
          title: 'CCTV6',
          url: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
        },
        {
          id: 14,
          title: 'CCTV14',
          url: 'http://ivi.bupt.edu.cn/hls/cctv14hd.m3u8'
        },
        {
          id: 8,
          title: 'CCTV8',
          url: 'http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8'
        },
        {
          id: 9,
          title: 'CCTV9',
          url: 'http://ivi.bupt.edu.cn/hls/cctv9hd.m3u8'
        }
      ]
      this.videoSources = sources
      this.channelOptions = []
      sources.forEach(value => {
        this.channelOptions.push({
          text: value.title,
          value: value.id
        })
      })
    },
    initPlayers () {
      // this.destoryPlayers()
      this.workingPlayers = []
      this.selectedChannels.forEach(channel => {
        let sourceInfo = this.videoSources.find(item => item.id === channel)
        let playerData = {
          id: channel,
          title: sourceInfo.title,
          url: sourceInfo.url
        }
        this.workingPlayers.push(playerData)
      })
    },
    destoryPlayers () {
      this.workingPlayers = []
    }
  },
  mounted: function () {
    this.getVideosources()
  }
}
</script>
<style scoped>
.col-3 {
  margin: 0px;
  padding-right: 0px;
  padding-left: 0px;
  border: 0px;
}
video {
  min-width: 100px;
}
#menu-btn {
  position: absolute;
  width: 50px;
  height: 30px;
  right: 20px;
  bottom: 10px;
}
#sidebar-right {
  font-size: 0.85em;
}
</style>
