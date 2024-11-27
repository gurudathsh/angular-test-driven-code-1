import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should convert top-level ISO date string to JavaScript Date object', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const isoDate = '2021-01-01T00:00:00.000Z';
    const result = app.toJavascriptDate(isoDate);
    expect(result).toEqual(new Date(isoDate));
    expect(result instanceof Date).toBeTrue();
  });

  it('should leave non-ISO date string as-is', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nonIsoDate = 'not-a-date';
    const result = app.toJavascriptDate(nonIsoDate);
    expect(result).toEqual(nonIsoDate);
  });

  it('should convert ISO date strings in nested objects to JavaScript Date objects', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nestedObject = {
      id: 1,
      date: '2021-01-01T00:00:00.000Z',
      second: {
        id: 2,
        createdAt: '2021-01-01T00:00:00.000Z',
        third: {
          id: 3,
          updatedAt: '2021-01-01T00:00:00.000Z',
        },
      },
    };

    const result = app.toJavascriptDate(nestedObject);
    expect(result.date instanceof Date).toBeTrue();
    expect(result.date).toEqual(new Date('2021-01-01T00:00:00.000Z'));
    expect(result.second.createdAt instanceof Date).toBeTrue();
    expect(result.second.createdAt).toEqual(new Date('2021-01-01T00:00:00.000Z'));
    expect(result.second.third.updatedAt instanceof Date).toBeTrue();
    expect(result.second.third.updatedAt).toEqual(new Date('2021-01-01T00:00:00.000Z'));
  });

  it('should leave primitive values unchanged', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const number = 42;
    const boolean = true;
    const nullValue = null;

    expect(app.toJavascriptDate(number)).toEqual(number);
    expect(app.toJavascriptDate(boolean)).toEqual(boolean);
    expect(app.toJavascriptDate(nullValue)).toBeNull();
  });

  it('should handle empty objects gracefully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const emptyObject = {};
    const result = app.toJavascriptDate(emptyObject);
    expect(result).toEqual({});
  });

  it('should handle arrays and convert ISO date strings within them', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const array = [
      '2021-01-01T00:00:00.000Z',
      'not-a-date',
      123,
    ];
    const result = app.toJavascriptDate(array);

    expect(result[0] instanceof Date).toBeTrue();
    expect(result[0]).toEqual(new Date('2021-01-01T00:00:00.000Z'));
    expect(result[1]).toEqual('not-a-date');
    expect(result[2]).toEqual(123);
  });

  it('should return undefined for undefined input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.toJavascriptDate(undefined);
    expect(result).toBeUndefined();
  });

  it('should handle null input gracefully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.toJavascriptDate(null);
    expect(result).toBeNull();
  });

  it('should handle deeply nested objects with mixed types', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const complexObject = {
      a: '2021-01-01T00:00:00.000Z',
      b: 123,
      c: {
        d: 'not-a-date',
        e: {
          f: '2021-01-02T12:00:00.000Z',
        },
      },
    };

    const result = app.toJavascriptDate(complexObject);

    expect(result.a instanceof Date).toBeTrue();
    expect(result.a).toEqual(new Date('2021-01-01T00:00:00.000Z'));
    expect(result.b).toEqual(123);
    expect(result.c.d).toEqual('not-a-date');
    expect(result.c.e.f instanceof Date).toBeTrue();
    expect(result.c.e.f).toEqual(new Date('2021-01-02T12:00:00.000Z'));
  });

});
