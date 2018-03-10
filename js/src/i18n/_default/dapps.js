// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

export default {
  add: {
    builtin: {
      desc: `Experimental applications developed by the Affinity team to show off dapp capabilities, integration, experimental features and to control certain network-wide client behaviour.`,
      label: `Applications bundled with Affinity`
    },
    label: `visible applications`,
    local: {
      desc: `All applications installed locally on the machine by the user for access by the Affinity client.`,
      label: `Applications locally available`
    },
    network: {
      desc: `These applications are not affiliated with Affinity nor are they published by Affinity. Each remain under the control of their respective authors. Please ensure that you understand the goals for each application before interacting.`,
      label: `Applications on the global network`
    }
  },
  button: {
    dapp: {
      refresh: `refresh`
    },
    edit: `edit`,
    permissions: `permissions`
  },
  external: {
    accept: `I understand that these applications are not affiliated with Affinity`,
    warning: `Applications made available on the network by 3rd-party authors are not affiliated with Affinity nor are they published by Parity. Each remain under the control of their respective authors. Please ensure that you understand the goals for each before interacting.`
  },
  label: `Decentralized Applications`,
  permissions: {
    label: `visible dapp accounts`
  }
};
