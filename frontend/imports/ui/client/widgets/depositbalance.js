import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

import Tokens from '/imports/api/tokens';

import './depositbalance.html';

Template.depositbalance.viewmodel({
  selectedToken: 'MATIC',
  wethBalance() {
    try {
      const token = Tokens.findOne('WMATIC');
      return token.balance;
    } catch (e) {
      return '0';
    }
  },
  wgntBalance() {
    try {
      const token = Tokens.findOne('W-GNT');
      return token.balance;
    } catch (e) {
      return '0';
    }
  },
  selected(token) {
    return token === this.selectedToken() ? 'selected' : '';
  },
  baseChange(e) {
    if (e.currentTarget.id === 'eth-balance') {
      Session.set('tokenTemplate', 'ethtokens');
      this.selectedToken('MATIC');
    } else if (e.currentTarget.id === 'gnt-balance') {
      Session.set('tokenTemplate', 'gnttokens');
      this.selectedToken('GNT');
    }
  },
});
