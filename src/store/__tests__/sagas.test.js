// import test from 'tape';
import { clearError, delay } from '../sagas/notificationSaga'
import { resetErrorAction } from '../actions/actions';
import { call, put } from 'redux-saga/effects';

describe('notifications saga test', () => {
  it('incrementAsync Saga test', () => {
    const gen = clearError()

    expect(gen.next().value)
      .toStrictEqual(call(delay, 3000),
        'clearError Saga must call delay(3000)'
      );

    expect(gen.next().value)
      .toEqual(put({...resetErrorAction}));

    expect(gen.next()).toStrictEqual(
      { done: true, value: undefined },
      'clearError Saga must be done'
    );

  });
})