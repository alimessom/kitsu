import { expect } from 'chai'
import {
  sortAssets,
  sortByName,
  sortByDate,
  sortPeople,
  sortPlaylists,
  sortProductions,
  sortShots,
  sortTaskTypes,
  sortTasks,
  sortValidationColumns
} from '../../../src/lib/sorting'


const taskTypeMap = {
  'task-type-1': {id: 'task-type-1', priority: 1, name: 'Modeling'},
  'task-type-2': {id: 'task-type-2', priority: 1, name: 'Setup'},
  'task-type-3': {id: 'task-type-3', priority: 2, name: 'Texture'}
}

describe('lib/sorting', () => {

  beforeEach(() => {
  })

  it('sortByName', () => {
    const entries = [
      {name: 'Zou', id: 3},
      {name: 'Kitsu', id: 2},
      {name: 'Gazu', id: 1},
    ]
    let results = sortByName(entries)
    expect(results.length).to.equal(3)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)

    results = sortByName([])
    expect(results.length).to.equal(0)
  })

  it('sortAssets', () => {
    const entries = [
      {
        canceled: false,
        project_name: 'Big Buck Bunny',
        asset_type_name: 'Props',
        name: 'Tree',
        id: 4
      },
      {
        canceled: false,
        project_name: 'Big Buck Bunny',
        asset_type_name: 'Props',
        name: 'Table',
        id: 3
      },
      {
        canceled: false,
        project_name: 'Big Buck Bunny',
        asset_type_name: 'Props',
        name: 'Chair',
        id: 2
      },
      {
        canceled: false,
        project_name: 'Big Buck Bunny',
        asset_type_name: 'Characters',
        name: 'Bunny',
        id: 1
      }
    ]
    let results = sortAssets(entries)
    expect(results.length).to.equal(4)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)
    expect(results[3].id).to.equal(4)

    results = sortAssets([])
    expect(results.length).to.equal(0)
  })

  it('sortShots', () => {
    const entries = [
      {
        canceled: false,
        episode_name: 'E01',
        sequence_name: 'SE02',
        name: 'SH03',
        id: 4
      },
      {
        canceled: false,
        episode_name: 'E01',
        sequence_name: 'SE02',
        name: 'SH02',
        id: 3
      },
      {
        canceled: false,
        episode_name: 'E01',
        sequence_name: 'SE02',
        name: 'SH01',
        id: 2
      },
      {
        canceled: true,
        episode_name: 'E01',
        sequence_name: 'SE03',
        name: 'SH01',
        id: 6
      },
      {
        canceled: false,
        episode_name: 'E01',
        sequence_name: 'SE01',
        name: 'SH01',
        id: 1
      },
      {
        canceled: false,
        episode_name: 'E02',
        sequence_name: 'SE01',
        name: 'SH01',
        id: 5
      }
    ]
    let results = sortShots(entries)

    expect(results.length).to.equal(6)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)
    expect(results[3].id).to.equal(4)
    expect(results[4].id).to.equal(5)
    expect(results[5].id).to.equal(6)

    results = sortShots([])
    expect(results.length).to.equal(0)
  })

  it('sortShots - without episodes', () => {
    const entries = [
      {
        canceled: false,
        sequence_name: 'SE02',
        name: 'SH01',
        id: 4
      },
      {
        canceled: false,
        sequence_name: 'SE03',
        name: 'SH02',
        id: 6
      },
      {
        canceled: false,
        sequence_name: 'SE01',
        name: 'SH01',
        id: 1
      },
      {
        canceled: false,
        sequence_name: 'SE03',
        name: 'SH01',
        id: 5
      },
      {
        canceled: true,
        sequence_name: 'SE01',
        name: 'SH04',
        id: 7
      },
      {
        canceled: false,
        sequence_name: 'SE01',
        name: 'SH02',
        id: 2
      },
      {
        canceled: false,
        sequence_name: 'SE01',
        name: 'SH03',
        id: 3
      }
    ]
    let results = sortShots(entries)

    expect(results.length).to.equal(7)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)
    expect(results[3].id).to.equal(4)
    expect(results[4].id).to.equal(5)
    expect(results[5].id).to.equal(6)
    expect(results[6].id).to.equal(7)

    results = sortShots([])
    expect(results.length).to.equal(0)
  })

  it('sortProductions', () => {
    const entries = [
      {project_status_name: 'closed', name: 'Big Buck Bunny', id: 3},
      {project_status_name: 'open', name: 'Cosmos Landromat', id: 2},
      {project_status_name: 'open', name: 'Agent 327', id: 1},
    ]
    let results = sortProductions(entries)
    expect(results.length).to.equal(3)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)

    results = sortProductions([])
    expect(results.length).to.equal(0)
  })

  it('sortTaskTypes', () => {
    const entries = [
      {for_shots: false, priority: 1, name: 'Modeling', id: 2},
      {for_shots: false, priority: 2, name: 'Setup', id: 5},
      {for_shots: false, priority: 1, name: 'Modeling Low', id: 4},
      {for_shots: false, priority: 1, name: 'Modeling Hi', id: 3},
      {for_shots: true, priority: 1, name: 'Animation', id: 1}
    ]
    let results = sortProductions(entries)
    expect(results.length).to.equal(5)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)
    expect(results[3].id).to.equal(4)
    expect(results[4].id).to.equal(5)

    results = sortProductions([])
    expect(results.length).to.equal(0)
  })

  it('sortTasks', () => {
    const entries = [
      {
        project_name: 'Big Buck Bunny',
        task_type_id: 'task-type-1',
        entity_name: 'Chair',
        full_entity_name: 'Props / Tree',
        priority: 3,
        id: 5
      },
      {
        project_name: 'Big Buck Bunny',
        task_type_id: 'task-type-1',
        entity_name: 'Tree',
        full_entity_name: 'Props / Tree',
        id: 4
      },
      {
        project_name: 'Agent 327',
        task_type_id: 'task-type-1',
        entity_name: 'Agent327',
        full_entity_name: 'Characters / Agent327',
        id: 1
      },
      {
        project_name: 'Agent 327',
        task_type_id: 'task-type-2',
        entity_name: 'Agent327',
        full_entity_name: 'Characters / Agent327',
        id: 3
      },
      {
        project_name: 'Agent 327',
        task_type_id: 'task-type-1',
        entity_name: 'SuperVilain',
        full_entity_name: 'Characters / SuperVilain',
        id: 2
      }
    ]
    let results = sortTasks(entries, taskTypeMap)
    expect(results.length).to.equal(5)
    expect(results[0].id).to.equal(5)
    expect(results[1].id).to.equal(1)
    expect(results[2].id).to.equal(2)
    expect(results[3].id).to.equal(3)
    expect(results[4].id).to.equal(4)

    results = sortProductions([])
    expect(results.length).to.equal(0)
  })

  it('sortTaskTypes', () => {
    const entries = [
      {for_shots: false, priority: 1, name: 'Modeling', id: 2},
      {for_shots: false, priority: 2, name: 'Setup', id: 5},
      {for_shots: false, priority: 1, name: 'Modeling Low', id: 4},
      {for_shots: false, priority: 1, name: 'Modeling Hi', id: 3},
      {for_shots: true, priority: 1, name: 'Animation', id: 1}
    ]
    let results = sortProductions(entries)
    expect(results.length).to.equal(5)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(3)
    expect(results[3].id).to.equal(4)
    expect(results[4].id).to.equal(5)

    results = sortProductions([])
    expect(results.length).to.equal(0)
  })

  it('sortValidationColumns', () => {
    const entries = ['task-type-3', 'task-type-2', 'task-type-1']
    let results = sortValidationColumns(entries, taskTypeMap)
    expect(results.length).to.equal(3)
    expect(results[0]).to.equal('task-type-1')
    expect(results[1]).to.equal('task-type-2')
    expect(results[2]).to.equal('task-type-3')

    results = sortValidationColumns([])
    expect(results.length).to.equal(0)
  })

  it('sortPlaylist', () => {
    const entries = [
      { id: 1, created_at: '2018-09-12-12:18:30', name: 'Playlist1'},
      { id: 2, created_at: '2018-09-18-16:22:00', name: 'Playlist2'},
      { id: 3, created_at: '2018-09-18-18:19:00', name: 'Playlist3'},
    ]
    let results = sortByDate(entries)
    expect(results.length).to.equal(3)
    expect(results[0].id).to.equal(3)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(1)
  })

  it('sortPeople', () => {
    const people = [
      { id: 1, first_name: 'Allen', last_name: 'Beard'},
      { id: 2, first_name: 'John', last_name: 'Doe'},
      { id: 3, first_name: 'Emma', last_name: 'Doe'}
    ]

    let results = sortPeople(people)
    expect(results.length).to.equal(3)
    expect(results[0].id).to.equal(1)
    expect(results[1].id).to.equal(3)
    expect(results[2].id).to.equal(2)
  })

  it('sortByDate', () => {
    const entries = [
      { id: 1, created_at: '2018-09-12-12:18:30'},
      { id: 2, created_at: '2018-09-18-16:22:00'},
      { id: 3, created_at: '2018-09-18-18:19:00'}
    ]
    let results = sortByDate(entries)
    expect(results.length).to.equal(3)
    expect(results[0].id).to.equal(3)
    expect(results[1].id).to.equal(2)
    expect(results[2].id).to.equal(1)
  })
})
