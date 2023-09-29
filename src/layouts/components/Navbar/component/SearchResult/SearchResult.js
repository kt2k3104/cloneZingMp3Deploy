import { faArrowTrendUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchResult.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlighter from 'react-highlight-words';

const cx = classNames.bind(styles);

function SearchResult({ attrs, searchResults, keyword, value, setKeyword, hide, setIsFocus }) {
  return (
    <div id="nav-search" className={cx('search-result')} tabIndex="-1" {...attrs}>
      <ul className={cx('suggest-list')}>
        <div className={cx('suggest-list-content')}>
          {searchResults?.length > 0 && (
            <>
              <div className={cx('search-title')}>Từ khóa liên quan</div>

              {searchResults.map((item) => {
                return (
                  <div>
                    <li className={cx('suggest-item')}>
                      <FontAwesomeIcon icon={faSearch} />
                      <div className={cx('is-oneline')}>
                        <Highlighter
                          highlightStyle={{
                            fontWeight: 'bold',
                            color: 'white',
                            backgroundColor: 'transparent',
                          }}
                          searchWords={[value]}
                          autoEscape={true}
                          textToHighlight={item.name}
                        />
                      </div>
                    </li>
                  </div>
                );
              })}
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faSearch} />
                  <div className={cx('is-oneline')}>
                    <Highlighter
                      highlightStyle={{
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'transparent',
                      }}
                      searchWords={[keyword]}
                      autoEscape={true}
                      textToHighlight={`Tìm kiếm "${keyword}"`}
                    />
                  </div>
                </li>
              </div>
            </>
          )}
          {searchResults?.length === 0 && (
            <>
              <div className={cx('search-title')}>Từ khóa liên quan</div>

              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faSearch} />
                  <div className={cx('is-oneline')}>
                    <Highlighter
                      highlightStyle={{
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'transparent',
                      }}
                      searchWords={[keyword]}
                      autoEscape={true}
                      textToHighlight={keyword}
                    />
                  </div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faSearch} />
                  <div className={cx('is-oneline')}>
                    <Highlighter
                      highlightStyle={{
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'transparent',
                      }}
                      searchWords={[keyword]}
                      autoEscape={true}
                      textToHighlight={`Tìm kiếm "${keyword}"`}
                    />
                  </div>
                </li>
              </div>
            </>
          )}
          {!searchResults && (
            <>
              <div className={cx('search-title')}>Đề xuất cho bạn</div>
              <div>
                <li
                  className={cx('suggest-item')}
                  onClick={(e) => {
                    setKeyword('seven');
                    hide();
                    setIsFocus(false);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>seven</div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>ngày mình chia tay</div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>à lôi</div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>sự mập mờ</div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>đùa hơi quá</div>
                </li>
              </div>
              <div>
                <li className={cx('suggest-item')}>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  <div className={cx('is-oneline')}>ngày mai người ta lấy chồng</div>
                </li>
              </div>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default SearchResult;
