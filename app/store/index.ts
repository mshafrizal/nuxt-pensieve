import { ActionContext, ActionTree, MutationTree } from 'vuex';
import { Route } from 'vue-router';
import Vue from 'vue';
import { getContent } from '@/utils';

export interface State {
  perPage: number;
  pages: Page[];
  posts: Post[];
  route?: Route;
  navMobileState: boolean;
}

// Initial State
export const appState = {
  perPage: 4,
  pages: [],
  posts: [],
  navMobileState: false,
};

export const mutations: MutationTree<State> = {
  SET_PAGES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'pages', payload);
  },
  SET_POSTS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'posts', payload);
  },
  SET_NAV_MOBILE_STATE: (state, payload: boolean): void => {
    Vue.set(state, 'navMobileState', payload);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PAGES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_POSTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
  UPDATE_NAV_MOBILE_STATE(context: ActionContext<S, R>, payload: boolean): void;
}

export const actions: Actions<State, State> = {
  async GET_POSTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/blog/', false, /\.json$/);
    const posts = await getContent({ context, prefix: 'blog' });
    commit('SET_POSTS', posts);
  },

  async GET_PAGES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/pages/', false, /\.json$/);
    const pages = await getContent({
      context,
      prefix: 'pages',
    });
    commit('SET_PAGES', pages);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([dispatch('GET_PAGES_LIST'), dispatch('GET_POSTS_LIST')]);
  },

  UPDATE_NAV_MOBILE_STATE({ commit }, payload) {
    commit('SET_NAV_MOBILE_STATE', payload);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
